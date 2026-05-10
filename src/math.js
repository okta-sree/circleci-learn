/**
 * Math Utility Library
 * A simple collection of math functions — our CircleCI learning project
 */

/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} Division by zero
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

/**
 * Returns the factorial of n
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Checks if a number is prime
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Returns the square of a number
 * @param {number} n
 * @returns {number}
 */
function square(n) {
  return n * n;
}

module.exports = { add, subtract, multiply, divide, factorial, isPrime, square };
