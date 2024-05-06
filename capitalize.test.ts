import capitalize from "./capitalize";

test('Single word that is all lowercase', () => {
  expect(capitalize('lowercase')).toBe('Lowercase');
});

test('Single word that is already capitalized', () => {
  expect(capitalize('Uppercase')).toBe('Uppercase');
});

test('Single word that is all uppercase', () => {
  expect(capitalize('CAPS')).toBe('Caps');
});

test('Sentence that is all lowercase', () => {
  expect(capitalize('i am a sentence.')).toBe('I am a sentence.');
});

test('String that begins with a number', () => {
  expect(capitalize('1 string with number')).toBe('1 string with number');
});