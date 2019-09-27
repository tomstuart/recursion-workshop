import reverseString from '../lib/reverseString';

describe('reverseString', () => {
  test('reverseString("")', () => {
    expect(reverseString('')).toBe('');
  });

  test('reverseString("a")', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('reverseString("ab")', () => {
    expect(reverseString('ab')).toBe('ba');
  });

  test('reverseString("The future is now")', () => {
    expect(reverseString('The future is now')).toBe('won si erutuf ehT');
  });
});
