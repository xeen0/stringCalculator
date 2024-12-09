const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number input", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should return the sum of numbers", () => {
    expect(add("1,5,,7,5,1,,3")).toBe(22);
  });

  test("should return the sum of numbers", () => {
    expect(add("1,5,,7,5,1,,3-,d,-d,")).toBe(22);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should handle custom delimiters', () => {
    expect(add('//;\n1;2;3;4;5')).toBe(15);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
  });

  test('should ingore numbers greater than 1000', () => {
    expect(add('1,2,10001,4')).toBe(7);
  })
});
