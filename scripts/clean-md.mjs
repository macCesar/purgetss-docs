import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { checkDocsVersion, reportDocsVersion } from './check-docs-version.mjs'

// This repo is the source of truth for the documentation. The docs are authored
// here, published with `npm run deploy`, and fanned out from here to the two
// consumers below — so the only absolute paths are the destinations.
const currentDir = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_ROOT = path.join(currentDir, '..')
const DOCS_SRC = path.join(SOURCE_ROOT, 'docs')
const PAGES_SRC = path.join(SOURCE_ROOT, 'src/pages')

const PURGETSS_ROOT = '/Users/cesar/Developer/openSource/purgeTSS'
const CONTEXT7_ROOT = '/Users/cesar/Developer/openSource/purgetss-docs-context7'
const OUTPUT_DIR = path.join(PURGETSS_ROOT, '.dev/docs')

function cleanFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n+/, '')
}

function cleanAdmonitions(content) {
  // Converts :::tip, :::info, :::caution, :::warning, :::danger, etc. into quotes with emoji
  return content.replace(/:::(tip|info|caution|warning|danger)(.*?):::/gs, (match, type, inner) => {
    const emojis = { tip: '💡', info: 'ℹ️', caution: '⚠️', warning: '🚨', danger: '🛑' }
    const emoji = emojis[type] || '💬'
    // Cleans extra line breaks
    const text = inner.replace(/^[\s\n]+|[\s\n]+$/g, '')
    return `> ${emoji} **${type.toUpperCase()}**\n>\n> ${text.split('\n').join('\n> ')}\n`
  })
}

function cleanCodeTitles(content) {
  // Converts ```js title="file.js" into comment before the block
  return content.replace(/```(\w+)\s+title="([^"]+)"\n/g, (match, lang, title) => {
    return `\`${title}\`\n\`\`\`${lang}\n`
  })
}

function cleanCodeBlockAttrs(content) {
  // Removes any extra attributes after the language in code blocks
  // Only if it's NOT a block with title (already handled by cleanCodeTitles)
  //
  // Anchored to the fence line. The attributes always sit on that same line, so
  // the pattern must never span a newline: an unanchored `\{[^}]+\}` swallowed
  // the opening lines of any ```json block starting with `{` and containing a
  // nested object, deleting them from the generated copy.
  return content.replace(/^([ \t]*(?:>[ \t]*)*)```(\w+)[^\n]*$/gm, (match, prefix, lang) => {
    return `${prefix}\`\`\`${lang}`
  })
}

// Two lookup tables. `slugs` comes from the frontmatter and is authoritative:
// it is what Docusaurus serves. `bare` is a fallback built from the filename
// minus its ordering prefix, so pages without a slug (src/pages/*.md) still
// resolve. Both are keyed the way a link is written, e.g. `customization/the-config-file`.
function buildSlugMap(dir, baseDir = dir, maps = { slugs: {}, bare: {} }) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry)
    if (fs.statSync(fullPath).isDirectory()) {
      buildSlugMap(fullPath, baseDir, maps)
    } else if (entry.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8')
      const slugMatch = content.match(/^---[\s\S]*?slug:\s*(.+?)[\s\n][\s\S]*?---/m)
      const relativeFile = path.relative(baseDir, fullPath)
      const dirPart = path.dirname(relativeFile)
      const key = name => (dirPart === '.' ? name : `${dirPart}/${name}`)

      if (slugMatch) {
        maps.slugs[key(slugMatch[1].trim())] = relativeFile
      }
      maps.bare[key(entry.replace(/\.md$/, '').replace(/^\d+-/, ''))] = relativeFile
    }
  }
  return maps
}

// Docusaurus links are slugs, not paths: `customization/the-config-file` from a
// page in docs/, `../commands#brand-command` from a subfolder, `docs/installation`
// from src/pages/. GitHub resolves none of them, so every one is rewritten to the
// real file. Anything that fails to resolve is left untouched.
function resolveLink(linkPath, fileDir, maps) {
  const stripped = linkPath.replace(/^\/?docs\//, '')
  const candidates = stripped.startsWith('.')
    ? [path.normalize(path.join(fileDir, stripped))]
    : [stripped, path.normalize(path.join(fileDir, stripped))]

  for (const candidate of candidates) {
    const key = candidate.replace(/^\.\//, '')
    if (maps.slugs[key]) return maps.slugs[key]
    if (maps.bare[key]) return maps.bare[key]
  }
  return null
}

function fixDocusaurusLinks(content, filePath, maps, baseDir) {
  const fileDir = path.relative(baseDir, path.dirname(filePath))

  return content.replace(/\]\(([^)\s#]+)(#[^)\s]*)?\)/g, (match, linkPath, anchor) => {
    // External links, in-page anchors and links that already point at a file
    // (other pages, images, code samples) are already valid on GitHub.
    if (/^(https?:|mailto:|\/\/)/.test(linkPath)) return match
    if (/\.[a-z0-9]+$/i.test(linkPath)) return match

    const realFile = resolveLink(linkPath, fileDir, maps)
    if (!realFile) return match
    anchor = anchor || ''

    const fromDir = fileDir === '' ? '.' : fileDir
    let relativePath = path.relative(fromDir, realFile)

    // Ensure ./ prefix for same-directory links
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath
    }

    return `](${relativePath}${anchor})`
  })
}

function cleanAll(filePath, maps, baseDir) {
  let content = fs.readFileSync(filePath, 'utf8')
  content = fixDocusaurusLinks(content, filePath, maps, baseDir)
  content = cleanFrontmatter(content)
  content = cleanAdmonitions(content)
  content = cleanCodeTitles(content)
  content = cleanCodeBlockAttrs(content)
  fs.writeFileSync(filePath, content, 'utf8')
}

function walkAndClean(dir, maps, baseDir) {
  let count = 0
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry)
    if (fs.statSync(fullPath).isDirectory()) {
      count += walkAndClean(fullPath, maps, baseDir)
    } else if (entry.endsWith('.md')) {
      cleanAll(fullPath, maps, baseDir)
      count++
    }
  }
  return count
}

// Validate sources exist
for (const src of [DOCS_SRC, PAGES_SRC]) {
  if (!fs.existsSync(src)) {
    console.error(`Source not found: ${src}`)
    process.exit(1)
  }
}

// The PurgeTSS CLI repo holds the intermediate output. Without it there is
// nothing to clean into, so stop before touching anything.
if (!fs.existsSync(PURGETSS_ROOT)) {
  console.error(`PurgeTSS repo not found: ${PURGETSS_ROOT}`)
  process.exit(1)
}

// Fresh copy: only remove the generated docs/ dir, preserve README.md and CHANGELOG.md
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true })
}

// Copy docs/ (full tree with assets)
fs.cpSync(DOCS_SRC, OUTPUT_DIR, { recursive: true })

// Copy pages/ .md files directly into the same output dir
for (const file of fs.readdirSync(PAGES_SRC)) {
  if (file.endsWith('.md')) {
    fs.copyFileSync(path.join(PAGES_SRC, file), path.join(OUTPUT_DIR, file))
  }
}

const totalCopied = fs.readdirSync(OUTPUT_DIR, { recursive: true }).filter(f => {
  return fs.statSync(path.join(OUTPUT_DIR, f)).isFile()
}).length

// Build slug map before cleaning (frontmatter is still intact)
const maps = buildSlugMap(OUTPUT_DIR)
const totalCleaned = walkAndClean(OUTPUT_DIR, maps, OUTPUT_DIR)

// Copy cleaned docs to context7 repo
const CONTEXT7_DIR = path.join(CONTEXT7_ROOT, 'docs')
if (fs.existsSync(CONTEXT7_ROOT)) {
  if (fs.existsSync(CONTEXT7_DIR)) {
    fs.rmSync(CONTEXT7_DIR, { recursive: true })
  }
  fs.cpSync(OUTPUT_DIR, CONTEXT7_DIR, { recursive: true })

  // Regenerate root README.md from cleaned index.md, rewriting relative links
  // so they resolve from the repo root instead of inside docs/
  const indexPath = path.join(OUTPUT_DIR, 'index.md')
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8')
    const readmeContent = indexContent.replace(/\]\(\.\//g, '](./docs/')
    fs.writeFileSync(path.join(CONTEXT7_ROOT, 'README.md'), readmeContent, 'utf8')
  }

  console.log(`${totalCopied} files copied, ${totalCleaned} .md files cleaned`)
  console.log(`Source: ${SOURCE_ROOT}`)
  console.log(`Synced: ${OUTPUT_DIR}`)
  console.log(`Synced: ${CONTEXT7_DIR}`)
  console.log(`Updated: ${path.join(CONTEXT7_ROOT, 'README.md')}`)
} else {
  console.log(`${totalCopied} files copied, ${totalCleaned} .md files cleaned`)
  console.log(`Source: ${SOURCE_ROOT}`)
  console.log(`Synced: ${OUTPUT_DIR}`)
  console.warn(`Skipped sync: ${CONTEXT7_ROOT} not found`)
}

// Non-fatal: the sync above already ran, this only flags docs left behind
reportDocsVersion(checkDocsVersion(PURGETSS_ROOT))
