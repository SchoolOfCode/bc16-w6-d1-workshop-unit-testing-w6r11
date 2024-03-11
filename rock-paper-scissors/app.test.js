import {test, expect} from "vitest"
import { calculateRoundResult, calculateNewScores, generateComputerMove} from "./app.js"
import { ROCK, PAPER, SCISSORS, DRAW, WIN, LOSS } from "./app.js"

test("Player wins conditions working", () => {
    const result1 = calculateRoundResult(PAPER, ROCK);
    const result2 = calculateRoundResult(SCISSORS, PAPER);
    const result3 = calculateRoundResult(ROCK, SCISSORS);

    expect(result1).toHaveProperty("outcome", WIN);
    expect(result2).toHaveProperty("outcome", WIN);
    expect(result3).toHaveProperty("outcome", WIN);

  });

test("Player lose conditions working", () => {
    const result1 = calculateRoundResult(SCISSORS, ROCK);
    const result2 = calculateRoundResult(PAPER, SCISSORS);
    const result3 = calculateRoundResult(ROCK, PAPER);

    expect(result1).toHaveProperty("outcome", LOSS);
    expect(result2).toHaveProperty("outcome", LOSS);
    expect(result3).toHaveProperty("outcome", LOSS);

})

test("Player draw conditions working", () => {
    const result = calculateRoundResult(ROCK, ROCK);
    expect(result).toHaveProperty("outcome", DRAW);
})


test("Player input invalid should throw error", () => {
    expect(() => calculateRoundResult("ROKC", ROCK)).toThrowError(`Invalid player input`);
    expect(() => calculateRoundResult("PAEPA", SCISSORS)).toThrow(Error);
    expect(() => calculateRoundResult("SKIZZORS", PAPER)).toThrow(Error); 
    
    expect(() => calculateRoundResult("PAEPSCISOROCK", ROCK)).toThrowError("Invalid player input")
})


