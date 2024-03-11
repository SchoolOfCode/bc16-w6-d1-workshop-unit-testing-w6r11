//  import `test` and `expect` functions from Vitest
import { test, expect } from "vitest";
//  import the `sum` function from sum.js
import sum from "./sum.js";


//  create a bare bones test
test("Should return sum of first and second number", () => {
    expect(sum(1, 2)).toBe(3);
})
//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12