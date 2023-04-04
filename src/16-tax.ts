export {};

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax(cena: number): number {
  let pvn: number = 0.21;
  let musuPvn: number;
  musuPvn = cena * pvn;
  musuPvn = Math.round(musuPvn * 100) / 100;
  return musuPvn;
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);
console.log("Total: £" + Math.round((price + salesTax) * 100) / 100);

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
