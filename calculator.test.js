const calculator = require('./calculator');

test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
});

const { modulus } = require('./calculator');

test('modulus of two positive numbers', () => {
    expect(modulus(10, 3)).toBe(1);
});

test('modulus when dividend is smaller than divisor', () => {
    expect(modulus(2, 5)).toBe(2);
});

test('modulus with zero dividend', () => {
    expect(modulus(0, 5)).toBe(0);
});

test('modulus with negative numbers', () => {
    expect(modulus(-10, 3)).toBe(-1);
    expect(modulus(10, -3)).toBe(1);
    expect(modulus(-10, -3)).toBe(-1);
});

test('modulus by 1', () => {
    expect(modulus(7, 1)).toBe(0);
});




