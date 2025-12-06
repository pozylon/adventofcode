import { describe, test } from "node:test";
import { deepStrictEqual } from "node:assert";
import solve, { buildMatrix, countAdjacentPositions } from "./4.mts";

describe("Day 4", () => {

  test("buildMatrix", () => {
    const input = [
      "..@@.@@@@.",
      "@@@.@.@.@@"];
    const expected = [
      [0,0,1,1,0,1,1,1,1,0],
      [1,1,1,0,1,0,1,0,1,1],
    ];
    deepStrictEqual(buildMatrix(input), expected);
  });

  test("countAdjacentPositions", () => {
    const matrix = [
      [0,0,1,1,0,1,1,1,1,0],
      [1,1,1,0,1,0,1,0,1,1],
      [1,1,1,1,1,1,1,0,0,0],
      [0,1,0,0,1,1,1,1,1,0],
    ];
    deepStrictEqual(countAdjacentPositions(matrix, 0, 0), 2);
    deepStrictEqual(countAdjacentPositions(matrix, 5, 1), 7);
    deepStrictEqual(countAdjacentPositions(matrix, 9, 3), 1);
  });


  test("solve", async () => {
    deepStrictEqual(
      await solve([
        "..@@.@@@@.",
        "@@@.@.@.@@",
        "@@@@@.@.@@",
        "@.@@@@..@.",
        "@@.@@@@.@@",
        ".@@@@@@@.@",
        ".@.@.@.@@@",
        "@.@@@.@@@@",
        ".@@@@@@@@.",
        "@.@.@@@.@.",
      ]),
      43, // 13,
    );
  });
});
