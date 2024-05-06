import reverseString from "./reverseString";

test('Single word reversed', () => {
  expect(reverseString('backwards')).toBe('sdrawkcab');
});

test('Single word reversed with case in tact', () => {
  expect(reverseString('Uppercase')).toBe('esacreppU');
});

test('Sentence reversed', () => {
  expect(reverseString('I am a sentence.')).toBe('.ecnetnes a ma I');
});