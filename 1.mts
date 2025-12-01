import { readFile } from "node:fs/promises";

export const rotateRight = (state: number, rotations: number) => ({
  state: (state + rotations) % 100,
  zeroCrossings: Math.floor((rotations + state) / 100),
});

export const rotateLeft = (state: number, rotations: number) => {
  const fullRotations = Math.floor(rotations / 100) * 100;
  const remainingRotations = rotations - fullRotations;
  const newState = (state - remainingRotations + 100) % 100;

  let zeroCrossings = Math.abs(Math.floor((state - remainingRotations) / 100));
  if (state === 0) zeroCrossings -= 1;
  if (newState === 0) zeroCrossings += 1;
  zeroCrossings += fullRotations / 100;

  return {
    state: newState,
    zeroCrossings,
  };
};

export const rotationTransformer = (
  { state, zeroCrossings }: { state: number; zeroCrossings: number },
  code: string,
) => {
  const rotation = code[0] === "L" ? rotateLeft : rotateRight;
  const value = parseInt(code.slice(1), 10);
  const result = rotation(state, value);
  result.zeroCrossings += zeroCrossings;
  return result;
};

export default function solve(input: Array<string> = []) {
  const result = input.reduce(rotationTransformer, {
    state: 50,
    zeroCrossings: 0,
  });
  return result;
}

if (!process.env.NODE_TEST_CONTEXT) {
  const inputRaw = await readFile("./1.input.txt", "utf-8");
  const input = inputRaw.trim().split("\n");
  console.dir(solve(input));
}
