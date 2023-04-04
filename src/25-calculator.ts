export {};

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(nums: number[]): number {
  let i: number;
  let sum: number = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function multiply(nums: number[]): number {
  let i: number;
  let mult: number = 1;
  for (i = 0; i < nums.length; i++) {
    mult *= nums[i];
  }
  return mult;
}

function power(a: number, b: number): number {
  return Math.pow(a, b);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
