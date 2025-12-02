import { describe, test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import solve, { findInvalidIdsInRange, isIdValid } from "./2.mts";

describe("Day 2", () => {
  test("isIdValid function", () => {
    strictEqual(isIdValid(11), false);
    strictEqual(isIdValid(998), true);
    strictEqual(isIdValid(999), false);
    strictEqual(isIdValid(1000), true);
    strictEqual(isIdValid(1001), true);
    strictEqual(isIdValid(1010), false);
  });

  test("findInvalidIdsInRange function", () => {
    deepStrictEqual(findInvalidIdsInRange(11, 22), [11,22]);
    deepStrictEqual(findInvalidIdsInRange(95, 115), [99,111]);
    deepStrictEqual(findInvalidIdsInRange(998, 1012), [999,1010]);
    deepStrictEqual(findInvalidIdsInRange(1188511880, 1188511890), [1188511885]);
    deepStrictEqual(findInvalidIdsInRange(222220, 222224), [222222]);
    deepStrictEqual(findInvalidIdsInRange(1698522, 1698528), []);
    deepStrictEqual(findInvalidIdsInRange(446443, 446449), [446446]);
    deepStrictEqual(findInvalidIdsInRange(38593856, 38593862), [38593859]);
    deepStrictEqual(findInvalidIdsInRange(565653, 565659), [565656]);
    deepStrictEqual(findInvalidIdsInRange(824824821, 824824827), [824824824]);
    deepStrictEqual(findInvalidIdsInRange(2121212118, 2121212124), [2121212121]);
  });

  // test("solve", () => {
  //   deepStrictEqual(
  //     solve([
  //       "L68",
  //       "L30",
  //       "R48",
  //       "L5",
  //       "R60",
  //       "L55",
  //       "L1",
  //       "L99",
  //       "R14",
  //       "L82",
  //     ]),
  //     { state: 32, zeroCrossings: 6 },
  //   );
  // });
});
