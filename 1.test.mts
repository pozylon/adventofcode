import { describe, test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import solve, { rotateRight, rotateLeft } from "./1.mts";

describe("Day 1 - part 2", () => {
  test("rotateRight function", () => {
    strictEqual(rotateRight(50, 1).state, 51);
    strictEqual(rotateRight(99, 1).state, 0);
    strictEqual(rotateRight(99, 5).state, 4);

    strictEqual(rotateRight(52, 48).zeroCrossings, 1);
    strictEqual(rotateRight(52, 147).zeroCrossings, 1);
    strictEqual(rotateRight(52, 148).zeroCrossings, 2);
    strictEqual(rotateRight(95, 60).zeroCrossings, 1);
    strictEqual(rotateRight(95, 5).zeroCrossings, 1);
    strictEqual(rotateRight(95, 6).zeroCrossings, 1);
    strictEqual(rotateRight(0, 101).zeroCrossings, 1);
    strictEqual(rotateRight(1, 205).zeroCrossings, 2);
    strictEqual(rotateRight(0, 100).zeroCrossings, 1);
    strictEqual(rotateRight(0, 99).zeroCrossings, 0);
    strictEqual(rotateRight(0, 1000).zeroCrossings, 10);
  });

  test("rotateLeft function", () => {
    strictEqual(rotateLeft(50, 1).state, 49);
    strictEqual(rotateLeft(0, 1).state, 99);
    strictEqual(rotateLeft(1, 5).state, 96);
    strictEqual(rotateLeft(0, 432).state, 68);

    strictEqual(rotateLeft(82, 30).zeroCrossings, 0);
    strictEqual(rotateLeft(50, 68).zeroCrossings, 1);
    strictEqual(rotateLeft(0, 5).zeroCrossings, 0);
    strictEqual(rotateLeft(1, 105).zeroCrossings, 2);
    strictEqual(rotateLeft(0, 100).zeroCrossings, 1);
  });

  test("solve", () => {
    deepStrictEqual(
      solve([
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82",
      ]),
      { state: 32, zeroCrossings: 6 },
    );
  });
});
