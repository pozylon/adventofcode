import { readFile } from "node:fs/promises";

export const findHighestJoltageInSet = (set: number[] = [], level: number = 0, maxLevels: number = 2): number | null => {
  return set.reduce<number | null>((acc, value, idx) => {
    const exponent = Math.pow(10, maxLevels - level - 1);
    const currentValue = value * exponent;

    // Improvement: prune paths that can't beat the current best
    if ((currentValue + exponent) < (acc || 0)) return acc;

    if (level + 1 === maxLevels) return Math.max(acc || 0, currentValue);
    const nextValue = findHighestJoltageInSet(set.slice(idx + 1), level + 1, maxLevels);
    return nextValue === null ? acc : Math.max(acc || 0, currentValue + nextValue);
  }, null);
};

const parseRangeLine = (line: string): number[] => {
  return line.split("").map((char) => parseInt(char, 10));
};

export default function solve(input: Array<string> = []) {
  const total = input.reduce((acc, line) => {
    console.log("Processing line:", line);
    const set = parseRangeLine(line);
    // const joltage = findHighestJoltageInSet(set) || 0; // Part 1
    const joltage = findHighestJoltageInSet(set, 0, 12) || 0; // Part 2
    return joltage + acc;
  }, 0);
  return total;
}

if (!process.env.NODE_TEST_CONTEXT) {
  const inputRaw = await readFile("./3.input.txt", "utf-8");
  const input = inputRaw.trim().split("\n");
  console.dir(solve(input));
}
