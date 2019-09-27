import fibonacci from '../lib/fibonacci';

describe('fibonacci', () => {
  test('fibonacci(0)', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci(1)', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci(2)', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('fibonacci(3)', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('fibonacci(4)', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('fibonacci(5)', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci(6)', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('fibonacci(7)', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('fibonacci(42)', () => {
    expect(fibonacci(42)).toBe(267914296);
  });
});
