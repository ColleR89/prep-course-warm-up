export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

function min(arr: number[]): number {
  return Math.min(...arr); //Kas par ... ?
}

function max(arr: number[]): number {
  return Math.max(...arr);
}

function min2(arr: number[]): number {
    let i: number;
    let min: number = 99999999999999999;
    for (i = 0; i < arr.length; i++) {
        arr[i] < min ? min = arr[i] : min = min;
    }
    return min;
}

function max2(arr: number[]): number {
    let i: number;
    let max: number = -99999999999999999;
    for (i = 0; i < arr.length; i++) {
        arr[i] > max ? max = arr[i] : max = max;
    }
    return max;
}

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9

console.log(min2([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min2([9, -3, 6])); // Expected output: -3
console.log(max2([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max2([9, -3, 6])); // Expected output: 9
