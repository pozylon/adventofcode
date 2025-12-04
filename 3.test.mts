import { describe, test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import solve, { findHighestJoltageInSet } from "./3.mts";

describe("Day 3", () => {
  // test("findHighestJoltageInSet function", () => {
  //   strictEqual(findHighestJoltageInSet([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1]), 98);
  //   strictEqual(findHighestJoltageInSet([8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9]), 89);
  //   strictEqual(findHighestJoltageInSet([2, 3, 4, 2, 3, 4, 2, 3, 4, 3, 4, 2, 7, 8]), 78);
  //   strictEqual(findHighestJoltageInSet([8, 1, 8, 1, 8, 1, 9, 1, 1, 1, 1, 2, 1, 1, 1]), 92);
  // });

  test("findHighestJoltageInSet function", () => {
    strictEqual(findHighestJoltageInSet([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1], 0, 12), 987654321111);
    strictEqual(findHighestJoltageInSet([8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], 0, 12), 811111111119);
    strictEqual(findHighestJoltageInSet([2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 7, 8], 0, 12), 434234234278);
    strictEqual(findHighestJoltageInSet([8, 1, 8, 1, 8, 1, 9, 1, 1, 1, 1, 2, 1, 1, 1], 0, 12), 888911112111);
  });

  test("solve", () => {
    deepStrictEqual(
      solve([
        "987654321111111",
        "811111111111119",
        "234234234234278",
        "818181911112111",
      ]),
      3121910778619,
    );
  });
});
