import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const DOCS_ROOT = path.join(currentDir, '..')

// The released versions live in the CLI repo (package.json + CHANGELOG.md);
// what is documented lives here. This is the only path that has to reach out.
const DEFAULT_PURGETSS_ROOT = '/Users/cesar/Developer/openSource/purgeTSS'

function readVersions(file, pattern) {
  if (!fs.existsSync(file)) return null
  const content = fs.readFileSync(file, 'utf8')
  return [...content.matchAll(pattern)].map(match => match[1])
}

// Compares the released versions in PurgeTSS's CHANGELOG.md against the ones
// documented in purgetss-docs. Returns { ok, problems, notes } — never throws
// and never exits, so callers decide whether a mismatch is fatal.
export function checkDocsVersion(purgetssRoot = DEFAULT_PURGETSS_ROOT) {
  const problems = []
  const notes = []

  const pkgFile = path.join(purgetssRoot, 'package.json')
  if (!fs.existsSync(pkgFile)) {
    return { ok: false, problems: [`PurgeTSS repo not found: ${purgetssRoot}`], notes }
  }
  const pkgVersion = JSON.parse(fs.readFileSync(pkgFile, 'utf8')).version

  const released = readVersions(path.join(purgetssRoot, 'CHANGELOG.md'), /^## \[(\d+\.\d+\.\d+)\]/gm)
  if (!released) {
    return { ok: false, problems: [`CHANGELOG.md not found in ${purgetssRoot}`], notes }
  }

  const changelogFile = path.join(DOCS_ROOT, 'src/pages/changelog.md')
  const indexFile = path.join(DOCS_ROOT, 'src/pages/index.md')

  const documented = readVersions(changelogFile, /^## v(\d+\.\d+\.\d+)/gm)
  if (!documented) {
    return { ok: false, problems: [`Docs changelog not found: ${changelogFile}`], notes }
  }

  // CHANGELOG.md is ordered newest first, so anything above the version the docs
  // lead with is a release published after the docs were last updated. Older gaps
  // are intentional — minor patches were never documented — and stay quiet.
  const leadIndex = released.indexOf(documented[0])
  const missing = leadIndex === -1
    ? released.filter(version => !documented.includes(version))
    : released.slice(0, leadIndex).filter(version => !documented.includes(version))

  if (missing.length) {
    problems.push(`Released but missing from src/pages/changelog.md: ${missing.join(', ')}`)
  }

  const indexVersions = readVersions(indexFile, /^### v(\d+\.\d+\.\d+)/gm)
  if (!indexVersions) {
    problems.push(`Docs index not found: ${indexFile}`)
  } else if (indexVersions[0] !== pkgVersion) {
    problems.push(`src/pages/index.md leads with v${indexVersions[0] ?? 'nothing'}, package.json is v${pkgVersion}`)
  }

  if (documented[0] !== pkgVersion && !missing.includes(pkgVersion)) {
    notes.push(`src/pages/changelog.md leads with v${documented[0]}, package.json is v${pkgVersion}`)
  }

  return { ok: problems.length === 0, problems, notes, pkgVersion }
}

export function reportDocsVersion(result) {
  if (result.ok) {
    console.log(`Docs are up to date with v${result.pkgVersion}`)
    result.notes.forEach(note => console.log(`  ${note}`))
    return
  }

  console.warn('\nDocs are behind PurgeTSS:')
  result.problems.forEach(problem => console.warn(`  - ${problem}`))
  result.notes.forEach(note => console.warn(`  - ${note}`))
  console.warn('\nUpdate src/pages/changelog.md and src/pages/index.md, then run: npm run clean:md\n')
}

// CLI entry: exits 1 on mismatch so it can gate a release.
// Optional argument overrides the PurgeTSS repo path (defaults to DEFAULT_PURGETSS_ROOT).
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = checkDocsVersion(process.argv[2] || DEFAULT_PURGETSS_ROOT)
  reportDocsVersion(result)
  if (!result.ok) process.exitCode = 1
}
