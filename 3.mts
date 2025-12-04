import { readFile } from "node:fs/promises";

const powers = Array.from({ length: 24 }, (_, i) => Math.pow(10, i));
const memoizedMultiplications: Record<string, Array<number>> = {};
for (let j = 0; j <= 9; j++) {
  memoizedMultiplications[j] = powers.map((power) => j * power);
}

// Greedy approach: at each position, pick the largest digit that leaves enough digits for remaining positions
export const findHighestJoltageInSetGreedy = (
  set: number[] = [], 
  maxLevels: number = 2
): number | null => {
  if (set.length < maxLevels) return null;
  
  let result = 0;
  let startIdx = 0;
  
  for (let level = 0; level < maxLevels; level++) {
    const remainingPositions = maxLevels - level - 1;
    const maxStartIdx = set.length - remainingPositions - 1;
    
    // Find the largest digit in the valid range
    let maxDigit = -1;
    let maxIdx = startIdx;
    
    for (let i = startIdx; i <= maxStartIdx; i++) {
      if (set[i] > maxDigit) {
        maxDigit = set[i];
        maxIdx = i;
      }
    }
    
    result = result * 10 + maxDigit;
    startIdx = maxIdx + 1;
  }
  
  return result;
};

// Part 1 - Original recursive approach (slower but correct for all cases)
export const findHighestJoltageInSet = (
  set: number[] = [], 
  level: number = 0, 
  maxLevels: number = 2,
  startIdx: number = 0
): number | null => {
  let best: number | null = null;
  for (let idx = startIdx; idx < set.length; idx++) {
    const exponent = powers[maxLevels - level - 1];
    const currentValue = memoizedMultiplications[set[idx]][maxLevels - level - 1];

    // Improvement: prune paths that can't beat the current best
    if ((currentValue + exponent) <= (best ?? 0)) continue;

    // Improvement: prune paths where it will be null in the end
    if (set.length - idx < maxLevels - level) continue;

    if (level + 1 === maxLevels) {
      best = Math.max(best ?? 0, currentValue);
    } else {
      const nextValue = findHighestJoltageInSet(set, level + 1, maxLevels, idx + 1);
      if (nextValue !== null) {
        best = Math.max(best ?? 0, currentValue + nextValue);
      }
    }
  }
  
  return best;
};


const parseRangeLine = (line: string): number[] => {
  return line.split("").map((char) => parseInt(char, 10));
};

export default function solve(input: Array<string> = []) {
  const total = input.reduce((acc, line) => {
    console.log("Processing line:", line);
    const set = parseRangeLine(line);
    // const joltage = findHighestJoltageInSet(set) || 0; // Part 1
    const joltage = findHighestJoltageInSetGreedy(set, 12) || 0; // Part 2 - Greedy (fast)
    return joltage + acc;
  }, 0);
  return total;
}

if (!process.env.NODE_TEST_CONTEXT) {
  const inputRaw = await readFile("./3.input.txt", "utf-8");
  const input = inputRaw.trim().split("\n");
  console.dir(solve(input));
}
