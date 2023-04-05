export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string): string {
  let halfs: string[] = email.split("@");
  let hidden: string = "";
  if (halfs[0].length < 5) {
    hidden = "...@" + halfs[1];
  } else if (halfs[0].length < 6) {
    let hid: string[] = Array();
    hid = halfs[0].split("");
    halfs[0] = "";
    for (let i: number = 0; i < hid.length; i++) {
      if (i > 1) {
        halfs[0] += "...";
        break;
      } else {
        halfs[0] += hid[i];
      }
    }
    hidden = halfs[0] + "@" + halfs[1];
  } else {
    let hid: string[] = Array();
    hid = halfs[0].split("");
    halfs[0] = "";
    for (let i: number = 0; i < hid.length; i++) {
      if (i > 2) {
        halfs[0] += "...";
        break;
      } else {
        halfs[0] += hid[i];
      }
    }
    hidden = halfs[0] + "@" + halfs[1];
  }
  return hidden;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
