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
function calculateSalesTax(price: number): number {
  //PHP ar round() kaut kā labāk ir :D
  return +(Math.round(price * 0.21 * 100) / 100).toFixed(2); //Ar + priekšā konvertēju number formātā, bet tiek pazaudēta 0 galā...
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);
console.log("Total: £" + (price + salesTax).toFixed(2)); //Nācās ielikt toFixed(2), lai nebūtu daudz ciparu aiz komata...

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
