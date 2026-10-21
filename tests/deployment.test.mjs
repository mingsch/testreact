import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(new URL('../src/lib/publicAsset.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { publicAsset } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('GitHub Pages public assets use the testreact repository path', () => {
  assert.equal(publicAsset('/images/sign.png', '/testreact/'), '/testreact/images/sign.png');
  assert.equal(publicAsset('favicon.ico', '/testreact/'), '/testreact/favicon.ico');
});

test('Lovable preview assets keep the root deployment path', () => {
  assert.equal(publicAsset('/lovable-uploads/sign.png', '/'), '/lovable-uploads/sign.png');
});

test('Externally hosted files are not prefixed with the deployment path', () => {
  assert.equal(publicAsset('https://example.com/photo.png', '/testreact/'), 'https://example.com/photo.png');
  assert.equal(publicAsset('//example.com/photo.png', '/testreact/'), '//example.com/photo.png');
});
