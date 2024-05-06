import calculator from "./calculator";

test('Add positive integers', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('Add negative integers', () => {
  expect(calculator.add(-1, -2)).toEqual(-3);
});

test('Add floats', () => {
  expect(calculator.add(0.4, 0.75)).toBeCloseTo(1.15);
});

test('Subtract positive integers', () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});

test('Subtract negative integers', () => {
  expect(calculator.subtract(-1, -2)).toEqual(1);
});

test('Subtract floats', () => {
  expect(calculator.subtract(0.4, 0.75)).toBeCloseTo(-0.35);
});

test('multiply positive integers', () => {
  expect(calculator.multiply(3, 2)).toEqual(6);
});

test('multiply negative integers', () => {
  expect(calculator.multiply(-3, -2)).toEqual(6);
});

test('multiply floats', () => {
  expect(calculator.multiply(0.4, 0.75)).toBeCloseTo(0.3);
});

test('divide positive integers', () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test('divide negative integers', () => {
  expect(calculator.divide(-3, -2)).toBeCloseTo(1.5);
});

test('divide floats', () => {
  expect(calculator.divide(0.4, 0.75)).toBeCloseTo(0.5333);
});

test('divide by 0', () => {
  expect(calculator.divide(3, 0)).toBe(Infinity);
});
