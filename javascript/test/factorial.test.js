import factorial from '../lib/factorial';

describe('factorial', () => {
  test('factorial(0)', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial(1)', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial(2)', () => {
    expect(factorial(2)).toBe(2);
  });

  test('factorial(10)', () => {
    expect(factorial(10)).toBe(3628800);
  });

  test('factorial(100)', () => {
    expect(factorial(100)).toBeCloseTo(9.33262154439441e+157);
  });
});
