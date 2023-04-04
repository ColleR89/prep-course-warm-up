export {};

const repeatString = (what: string, cnt: number): string => {
  let i: number;
  let str: string = "";
  for (i = 0; i < cnt; i++) {
    str = str.concat(what);
  }
  return str;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
