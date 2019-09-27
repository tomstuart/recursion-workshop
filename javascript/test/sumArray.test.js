import sumArray from '../lib/sumArray';

describe('sumArray', () => {
  test('sumArray([])', () => {
    expect(sumArray([])).toBe(0);
  });

  test('sumArray([4])', () => {
    expect(sumArray([4])).toBe(4);
  });

  test('sumArray([4, 8, 15, 16, 23, 42])', () => {
    expect(sumArray([4, 8, 15, 16, 23, 42])).toBe(108);
  });
});
