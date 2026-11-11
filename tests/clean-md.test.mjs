import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { test } from 'node:test'

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'purgetss-clean-md-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const site = path.join(root, 'site')
  const cli = path.join(root, 'cli')
  const mirror = path.join(root, 'mirror')
  for (const dir of ['site/scripts', 'site/docs', 'site/src/pages', 'site/glossary', 'cli/.dev/docs', 'mirror']) {
    fs.mkdirSync(path.join(root, dir), { recursive: true })
  }
  const source = fs.readFileSync(new URL('../scripts/clean-md.mjs', import.meta.url), 'utf8')
    .replace('\'/Users/cesar/Developer/openSource/purgeTSS\'', JSON.stringify(cli))
    .replace('\'/Users/cesar/Developer/openSource/purgetss-docs-context7\'', JSON.stringify(mirror))
  fs.writeFileSync(path.join(site, 'scripts/clean-md.mjs'), source)
  fs.writeFileSync(path.join(site, 'scripts/check-docs-version.mjs'), 'export const checkDocsVersion = () => ({}); export const reportDocsVersion = () => {}')
  fs.writeFileSync(path.join(site, 'docs/example.md'), '---\ntitle: Example\n---\n\nKeep this text.\n')
  fs.writeFileSync(path.join(site, 'src/pages/index.md'), '# Home\n')
  fs.writeFileSync(path.join(site, 'glossary/property.md'), 'Old description\n')
  fs.writeFileSync(path.join(cli, '.dev/docs/previous.md'), 'Previous output\n')
  return { site, cli, mirror, run: () => spawnSync(process.execPath, [path.join(site, 'scripts/clean-md.mjs')], { encoding: 'utf8' }) }
}

test('imports generated glossary and preserves the existing docs conversion', t => {
  const f = fixture(t)
  const generated = path.join(f.cli, 'dist/glossary')
  fs.mkdirSync(path.join(generated, 'booleanProperties'), { recursive: true })
  fs.writeFileSync(path.join(generated, 'property.md'), 'Recovered description\n')
  fs.writeFileSync(path.join(generated, 'booleanProperties/snapping.md'), '```css\n.snapping: { snapping: true }\n```\n')
  fs.writeFileSync(path.join(generated, '.DS_Store'), 'ignore')
  const result = f.run()
  assert.equal(result.status, 0, result.stderr)
  assert.equal(fs.readFileSync(path.join(f.site, 'glossary/property.md'), 'utf8'), 'Recovered description\n')
  assert.equal(fs.readFileSync(path.join(f.site, 'glossary/booleanProperties/snapping.md'), 'utf8'), fs.readFileSync(path.join(generated, 'booleanProperties/snapping.md'), 'utf8'))
  assert.equal(fs.existsSync(path.join(f.site, 'glossary/.DS_Store')), false)
  for (const dest of [path.join(f.cli, '.dev/docs'), path.join(f.mirror, 'docs')]) {
    assert.equal(fs.readFileSync(path.join(dest, 'example.md'), 'utf8'), 'Keep this text.\n')
  }
  assert.equal(fs.readFileSync(path.join(f.site, 'docs/example.md'), 'utf8'), '---\ntitle: Example\n---\n\nKeep this text.\n')
  assert.match(result.stdout, /Glossary/)
})

test('missing generated glossary fails before modifying any destination', t => {
  const f = fixture(t)
  const result = f.run()
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /build:tailwind/)
  assert.equal(fs.readFileSync(path.join(f.site, 'glossary/property.md'), 'utf8'), 'Old description\n')
  assert.equal(fs.readFileSync(path.join(f.cli, '.dev/docs/previous.md'), 'utf8'), 'Previous output\n')
  assert.equal(fs.existsSync(path.join(f.mirror, 'docs')), false)
})
