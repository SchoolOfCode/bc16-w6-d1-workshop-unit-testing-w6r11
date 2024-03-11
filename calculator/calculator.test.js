import calculate from "./calculator";
import { test, expect } from "vitest";

// Create a barebones test
test("Barebones test", () => {});

// Create a test for addition
test("Expect firstArg + to correctly sum secondArg and thirdArg", () => {
  expect(calculate("+", 9, 11)).toBe(20);
});

// calculate('-', 4, 6); // should return -2
test("Expect first arg to subtract the third arg from the second arg", () => {
  expect(calculate("-", 4, 6)).toBe(-2);
});

// calculate('*', -6, -8); // should return 48
test("Expect first arg to multiply the second arg and third arg", () => {
  expect(calculate("*", -6, -8)).toBe(48);
});

//  * calculate('/', 121, 11); // should return 11
test("expect first arg to divide second arg by third arg", () => {
  expect(calculate("/", 121, 11)).toBe(11);
});

//  * calculate('sq', 5); // should return 25
test("expect first arg to square the second arg regardless of if theres a third arg", () => {
  expect(calculate("sq", 5, 11)).toBe(25);
});

//  * calculate('sq', 3, 44); // should return 9, as the 44 is ignored
//  * calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
test("expect to return error", () => {
  // Wrap the function call inside an anonymous function
  expect(() => calculate("%", 124, 56)).toThrow(Error);
});

//  * calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
//  * ```;
//  */
