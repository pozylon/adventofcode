import { readFile } from "node:fs/promises";

export const buildMatrix = (lines: string[]) => {
  const matrix: number[][] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!matrix[i]) matrix[i] = [];
    for (let j = 0; j < lines[i].length; j++) {
      matrix[i][j] = lines[i][j] === "@" ? 1 : 0;
    }
  }
  return matrix;
}

export const countAdjacentPositions = (matrix: number[][], x: number, y: number) => {
  return (matrix[y]?.[x + 1] || 0) + 
          (matrix[y]?.[x - 1] || 0) +
          (matrix[y + 1]?.[x] || 0) + 
          (matrix[y - 1]?.[x] || 0) +
          (matrix[y + 1]?.[x + 1] || 0) + 
          (matrix[y - 1]?.[x - 1] || 0) +
          (matrix[y + 1]?.[x - 1] || 0) +
          (matrix[y - 1]?.[x + 1] || 0);
}

export const removeRollsOfPaper = (matrix: number[][]) => {
  const totalY = matrix.length;
  const totalX = matrix[0].length;
  let removedPositions = [];

  for (let y = 0; y < totalY; y++) {
    for (let x = 0; x < totalX; x++) {
      const point = matrix[y][x];
      if (!point) continue;
      const adjacentCount = countAdjacentPositions(matrix, x, y);
      if (adjacentCount < 4) {
        removedPositions.push([x, y]);
      }
    }
  }

  return removedPositions;
}

export const applyRemovalsOnMatrix = (matrix: number[][], removals: Array<number[]>) => {
  const newMatrix = [...matrix];
  for (const [x, y] of removals) {
    newMatrix[y][x] = 0;
  }
  return newMatrix;
};

export default function solve(rawMatrix: Array<string> = []) {
  let matrix = buildMatrix(rawMatrix);
  
  let totalPositions = 0;
  while(1) {
    const removedRolls = removeRollsOfPaper(matrix);  
    matrix = applyRemovalsOnMatrix(matrix, removedRolls);
    totalPositions += removedRolls.length;
    if (removedRolls.length === 0) break;
  }
  
  return totalPositions;
}

if (!process.env.NODE_TEST_CONTEXT) {
  const inputRaw = await readFile("./4.input.txt", "utf-8");
  const input = inputRaw.trim().split("\n");
  console.dir(solve(input));
}
