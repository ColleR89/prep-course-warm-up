export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(
  value: null | undefined | number | string | Array<unknown>
): boolean {
  return typeof value === "string" ? !value.trim() : !value;
}

/*function isBlank(inp: any): boolean {
  if (inp == null) {
    return true;
  }
  if (inp != "" && inp != " ") {
    return false;
  } else {
    return true;
  }
}*/

console.log(isBlank(null)); // Expected output: true
console.log(isBlank(undefined)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
console.log(isBlank(0)); // Expected output: true
console.log(isBlank(1)); // Expected output: false
console.log(isBlank([])); // Expected output: true
console.log(isBlank([1, "kkas"])); // Expected output: false
