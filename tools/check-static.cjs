const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
function check(file) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of html.matchAll(/(?:src|href|templateUrl)\s*[=:]\s*['"]([^'"]+)['"]/g)) {
    const value = match[1];
    if (/^(?:https?:|\/\/|#|mailto:)|\{\{/.test(value)) continue;
    assert.ok(fs.existsSync(path.resolve(root, path.dirname(file), value)), `Missing asset: ${file} -> ${value}`);
  }
}
check('index.html');

console.log('Static entry point and local asset checks passed.');
