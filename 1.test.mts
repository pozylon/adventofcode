import { test } from 'node:test';
import { strictEqual } from 'node:assert';
import solve, { rotateRight, rotateLeft } from './1.mts';

test('rotateRight function', () => {
    strictEqual(rotateRight(50, 1).state, 51);
    strictEqual(rotateRight(99, 1).state, 0);
    strictEqual(rotateRight(99, 5).state, 4);

    strictEqual(rotateRight(52, 48).rotationsOver0, 1);
    strictEqual(rotateRight(52, 147).rotationsOver0, 1);
    strictEqual(rotateRight(52, 148).rotationsOver0, 2);
    strictEqual(rotateRight(95, 60).rotationsOver0, 1);
    strictEqual(rotateRight(95, 5).rotationsOver0, 1);
    strictEqual(rotateRight(95, 6).rotationsOver0, 1);
    strictEqual(rotateRight(0, 101).rotationsOver0, 1);
    strictEqual(rotateRight(1, 205).rotationsOver0, 2);
    strictEqual(rotateRight(0, 100).rotationsOver0, 1);
    strictEqual(rotateRight(0, 99).rotationsOver0, 0);
    strictEqual(rotateRight(0, 1000).rotationsOver0, 10);
});

test('rotateLeft function', () => {
    strictEqual(rotateLeft(50, 1).state, 49);
    strictEqual(rotateLeft(0, 1).state, 99);
    strictEqual(rotateLeft(1, 5).state, 96);
    strictEqual(rotateLeft(0, 432).state, 68);

    strictEqual(rotateLeft(82, 30).rotationsOver0, 0);
    strictEqual(rotateLeft(50, 68).rotationsOver0, 1);
    strictEqual(rotateLeft(0, 5).rotationsOver0, 0);
    strictEqual(rotateLeft(1, 105).rotationsOver0, 2);
    strictEqual(rotateLeft(0, 100).rotationsOver0, 1);
});

test('solve', (t) => {
    strictEqual(solve(['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82']), 6);
});