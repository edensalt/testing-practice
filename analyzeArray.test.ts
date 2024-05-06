import caesarCipher from "./caesarCipher";

test('Lowercase string with shift of 1', () => {
  expect(caesarCipher('hello world', 1)).toEqual('ifmmp xpsme');
});

test('Wrap around the alphabet', () => {
  expect(caesarCipher('zebra goes for a walk', 20)).toEqual('tyvlu aiym zil u qufe');
});

test('A very large shift factor', () => {
  expect(caesarCipher('a large shift factor', 100)).toEqual('w hwnca odebp bwypkn');
});

test('Capitalization', () => {
  expect(caesarCipher('I have some Capitalization in hEre', 5)).toEqual('N mfaj xtrj Hfunyfqnefynts ns mJwj');
});

test('Capitalization and punctuation', () => {
  expect(caesarCipher('I have some capitalization and punctuation!', 30)).toEqual('M lezi wsqi getmxepmdexmsr erh tyrgxyexmsr!');
});