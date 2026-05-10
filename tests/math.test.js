const { add, subtract, multiply, divide, factorial, isPrime } = require('../src/math');

describe('Math Utility Library', () => {

  // ─────────────────────────────────────────
  // ADD
  // ─────────────────────────────────────────
  describe('add()', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    test('adds negative numbers', () => {
      expect(add(-1, -1)).toBe(-2);
    });
    test('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  // ─────────────────────────────────────────
  // SUBTRACT
  // ─────────────────────────────────────────
  describe('subtract()', () => {
    test('subtracts two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test('result can be negative', () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  // ─────────────────────────────────────────
  // MULTIPLY
  // ─────────────────────────────────────────
  describe('multiply()', () => {
    test('multiplies two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });
    test('multiply by zero gives zero', () => {
      expect(multiply(99, 0)).toBe(0);
    });
  });

  // ─────────────────────────────────────────
  // DIVIDE
  // ─────────────────────────────────────────
  describe('divide()', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('throws on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // ─────────────────────────────────────────
  // FACTORIAL
  // ─────────────────────────────────────────
  describe('factorial()', () => {
    test('factorial of 0 is 1', () => {
      expect(factorial(0)).toBe(1);
    });
    test('factorial of 5 is 120', () => {
      expect(factorial(5)).toBe(120);
    });
    test('throws for negative numbers', () => {
      expect(() => factorial(-1)).toThrow();
    });
  });

  // ─────────────────────────────────────────
  // IS PRIME
  // ─────────────────────────────────────────
  describe('isPrime()', () => {
    test('2 is prime', () => {
      expect(isPrime(2)).toBe(true);
    });
    test('17 is prime', () => {
      expect(isPrime(17)).toBe(true);
    });
    test('1 is not prime', () => {
      expect(isPrime(1)).toBe(false);
    });
    test('9 is not prime', () => {
      expect(isPrime(9)).toBe(false);
    });
  });

});
