import analyzeArray from "./analyzeArray";

test('Simple array of positive integers', () => {
  expect(analyzeArray([4, 5, 19, 3, 49])).toMatchObject({
    average: 16,
    min: 3,
    max: 49,
    length: 5
  });
});

test('Array with negative integers', () => {
  expect(analyzeArray([4, -15, 19, -33, 49])).toMatchObject({
    average: 4.8,
    min: -33,
    max: 49,
    length: 5
  });
});

test('Array with decimals', () => {
  const result = analyzeArray([-15.5, 1.1, -1, 30.2]);
  expect(result.average).toBeCloseTo(3.7)
  expect(result.min).toBe(-15.5)
  expect(result.max).toBe(30.2)
  expect(result.length).toBe(4)
});