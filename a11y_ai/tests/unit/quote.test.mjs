import test from 'node:test';
import assert from 'node:assert/strict';
import { splitEmphasis } from '../../deck/quote/emphasis.ts';

test('splits around the emphasised phrase', () => {
  assert.deepEqual(splitEmphasis('makes things possible.', 'possible'), [
    { text: 'makes things ', em: false },
    { text: 'possible', em: true },
    { text: '.', em: false },
  ]);
});

test('no match or no emphasis = one plain part', () => {
  assert.deepEqual(splitEmphasis('hello', 'bye'), [{ text: 'hello', em: false }]);
  assert.deepEqual(splitEmphasis('hello'), [{ text: 'hello', em: false }]);
});

test('match ignores case and keeps the original text', () => {
  const parts = splitEmphasis("You're Expanding Your audience", 'expanding your AUDIENCE');
  assert.deepEqual(parts, [
    { text: "You're ", em: false },
    { text: 'Expanding Your audience', em: true },
  ]);
});
