import { readFile } from "node:fs/promises";

export const isIdValid = (value: number) => {
  const haystack = value.toString();
  for (let i = 1; i <= haystack.length; i++) {
    const probe = haystack.slice(-i);
    const matches = haystack.split(probe);
    const isPatternMatch = matches?.length >= 3;
    const isFollowing = matches.every(c => c === "");
    if (isPatternMatch && isFollowing) return false;
  }
  return true;
}

// Part 1
// export const isIdValid = (value: number) => {
//   const haystack = value.toString();
//   for (let i = 1; i <= haystack.length; i++) {
//     const probe = haystack.slice(-i);
//     const matches = haystack.split(probe);
//     const isPatternMatch = matches?.length === 3;
//     const isFollowing = matches.every(c => c === "");
//     if (isPatternMatch && isFollowing) return false;
//   }
//   return true;
// }

export const findInvalidIdsInRange = (start: number, end: number) => {
  return new Array(end - start + 1)
    .fill(0)
    .map((_, i) => start + i)
    .filter((id) => {
      return !isIdValid(id);
  });
}

export const parseRangeLine = (line: string) => {
  const [start, end] = line.split("-").map(Number);
  return { start, end };
}


export default function solve(input: Array<string> = []) {
  const total = input.reduce((acc, line) => {
    const { start, end } = parseRangeLine(line);
    const invalidIds = findInvalidIdsInRange(start, end);
    return invalidIds.reduce((sum, id) => sum + id, acc);
  }, 0);
  return total;
}

if (!process.env.NODE_TEST_CONTEXT) {
  const inputRaw = await readFile("./2.input.txt", "utf-8");
  const input = inputRaw.trim().split(",");
  console.dir(solve(input));
}
