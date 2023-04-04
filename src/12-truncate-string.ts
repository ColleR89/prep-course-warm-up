export {};

function truncateString(str: string, lenght: number): string {
  return str.substring(0, lenght);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
