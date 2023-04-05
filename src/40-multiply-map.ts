export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = (number: number[], callback: any): number[] => {
  for (let i: number = 0; i < number.length; i++) {
    number[i] = callback(number[i]);
  }
  return number;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function (number: number) {
  // Nācās pievienot :number, citādāk negribēja kompilēt...
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
