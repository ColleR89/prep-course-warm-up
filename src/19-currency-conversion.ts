export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
/*function convertToUSD(num: number): number {
  num = +(num * 1.25).toFixed(2);
  num = +(num * 1.01).toFixed(2); //1% fee
  return num;
}*/
// You are allowed to change this function
/*function convertToBRL(num: number): number {
  num = +(num * 6.33).toFixed(2);
  num = +(num * 1.01).toFixed(2); //1% fee
  return num;
}*/
// Konversijas funkcijs, gan USD, gan BRL
/*function convertTo(num: number, to: string): number {
  let coef: number;
  let fee = 0.01; //1%
  coef = to === "USD" ? 1.25 : 6.33;
  num = +(num * coef).toFixed(2);
  num += +(num * fee).toFixed(2); //1% fee
  return +num.toFixed(2);
}*/

const FEE_BRL = 0.01;
const FEE_EUR = 0.05;
const RATE_GBP_TO_EUR = 1.14;
const RATE_GBP_TO_BRL = 6.31;
const RATE_GBP_TO_USD = 1.25;

function convertTo(price: number, rate: number): number {
  return price * rate;
}

function addFee(price: number, fee: number): number {
  return price + price * fee;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertTo(price, RATE_GBP_TO_USD);
const priceInBRL = addFee(convertTo(price, RATE_GBP_TO_BRL), FEE_BRL);
const priceInEUR = addFee(convertTo(price, RATE_GBP_TO_EUR), FEE_EUR);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);
console.log("Price: EUR" + priceInEUR);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
