import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { test } from 'node:test'

function check(t, releases) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'purgetss-docs-version-')))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  for (const dir of ['scripts', 'src/pages', 'cli']) fs.mkdirSync(path.join(root, dir), { recursive: true })
  fs.copyFileSync(new URL('../scripts/check-docs-version.mjs', import.meta.url), path.join(root, 'scripts/check-docs-version.mjs'))
  fs.writeFileSync(path.join(root, 'src/pages/index.md'), '### v7.20.1\n### v7.20.0\n### v7.19.0\n')
  fs.writeFileSync(path.join(root, 'src/pages/changelog.md'), '## v7.20.1\n## v7.20.0\n## v7.19.0\n')
  fs.writeFileSync(path.join(root, 'cli/package.json'), JSON.stringify({ version: '7.20.1' }))
  fs.writeFileSync(path.join(root, 'cli/CHANGELOG.md'), releases.map(version => `## [${version}]`).join('\n'))
  return spawnSync(process.execPath, [path.join(root, 'scripts/check-docs-version.mjs'), path.join(root, 'cli')], { encoding: 'utf8' })
}

test('release preparation does not flag intentionally omitted historical patches', t => {
  const result = check(t, ['7.20.0', '7.19.0', '7.5.1'])
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /Docs are up to date with v7.20.1/)
})

test('release preparation still detects a newer undocumented CLI release', t => {
  const result = check(t, ['7.20.2', '7.20.0', '7.19.0', '7.5.1'])
  assert.equal(result.status, 1)
  assert.match(result.stderr, /Released but missing.*7.20.2/)
  assert.doesNotMatch(result.stderr, /7.5.1/)
})
