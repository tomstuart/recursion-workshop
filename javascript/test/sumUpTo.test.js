import sumUpTo from '../lib/sumUpTo';

describe('sumUpTo', () => {
  test('sumUpTo(0)', () => {
    expect(sumUpTo(0)).toBe(0);
  });

  test('sumUpTo(1)', () => {
    expect(sumUpTo(1)).toBe(1);
  });

  test('sumUpTo(2)', () => {
    expect(sumUpTo(2)).toBe(3);
  });

  test('sumUpTo(10)', () => {
    expect(sumUpTo(10)).toBe(55);
  });

  test('sumUpTo(100)', () => {
    expect(sumUpTo(100)).toBe(5050);
  });
});
