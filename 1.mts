import { readFile } from 'node:fs/promises'

export const rotateRight = (state: number, rotations: number) => {
    return {
        state: (state + rotations) % 100,
        rotationsOver0: Math.floor((rotations + state) / 100),
    };
};
export const rotateLeft = (state: number, rotations: number) => {
    const fullRotations = Math.floor(rotations / 100) * 100;
    const remainingRotations = rotations - fullRotations;

    const newState = (state - remainingRotations + 100) % 100;

    const r = (state - remainingRotations) / 100;
    let rotationsOver0 = Math.abs(Math.floor(r));
    if (state === 0) rotationsOver0 -= 1;
    if (newState === 0) rotationsOver0 += 1;

    rotationsOver0 += fullRotations / 100;

    return {
        state: newState,
        rotationsOver0,
    };
};

export const step = (code: string, initialState = 50) => {
    const rotation = code[0] === 'L' ? rotateLeft : rotateRight;
    const value = parseInt(code.slice(1), 10);
    return rotation(initialState, value);
}

export default function solve(input: Array<string> = []) {
    let amountOf0Rotations = 0;
    input.reduce((acc, curr) => {
        const { state: newState, rotationsOver0 } = step(curr, acc);
        amountOf0Rotations += rotationsOver0;
        return newState;
    }, 50);
    return amountOf0Rotations;
}

if (!process.env.NODE_TEST_CONTEXT) {
    const inputRaw = await readFile('./1.input.txt', 'utf-8');
    const input = inputRaw.trim().split('\n')    
    console.log(solve(input));
}
