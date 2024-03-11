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

//  * calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
test("expect to return error", () => {
  // Wrap the function call inside an anonymous function
  expect(() => calculate("%", 124, 56)).toThrow(Error);
});

//  * calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator

test("expect to throw error because unknown operate", () => {
  expect(() => calculate('🍕', -41414, 2)).toThrow(Error);
})

test("Check sum operator works", () => {
  expect(calculate("+", 3, 2)).toBe(5),
  expect(calculate("+", 6, 4)).toBe(10),
  expect(calculate("+", 9, 6)).toBe(15),
  expect(calculate("+", 12, 8)).toBe(20),
  expect(calculate("+", 15, 10)).toBe(25),
  expect(calculate("+", 18, 12)).toBe(30),
  expect(calculate("+", 21, 14)).toBe(35),
  expect(calculate("+", 24, 16)).toBe(40),
  expect(calculate("+", 27, 18)).toBe(45),
  expect(calculate("+", 30, 20)).toBe(50),
  expect(calculate("+", 33, 22)).toBe(55),
  expect(calculate("+", 36, 24)).toBe(60),
  expect(calculate("+", 39, 26)).toBe(65),
  expect(calculate("+", 42, 28)).toBe(70),
  expect(calculate("+", 45, 30)).toBe(75),
  expect(calculate("+", 48, 32)).toBe(80),
  expect(calculate("+", 51, 34)).toBe(85),
  expect(calculate("+", 54, 36)).toBe(90),
  expect(calculate("+", 57, 38)).toBe(95),
  expect(calculate("+", 60, 40)).toBe(100)
})
