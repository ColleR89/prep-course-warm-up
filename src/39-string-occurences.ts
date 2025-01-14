export {};

const count = (str: string, what: string): number => {
  return str.toLowerCase().split(what.toLowerCase()).length - 1;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
