// Strings in arithmetic operators are always converted to numbers except for addition operation

const x = "5";
const y = "6";

console.log(x + y); // This will not add the numbers correctly because '+' is a string operator thus the result will be ===> 56

const x1 = "5";
const y1 = "6";

// The operation below will come out correctly because JS will convert strings to numbers during arithmetic operations
console.log(x1 * y1);
console.log(x1 / y1);
console.log(x1 - y1);
console.log(x1 % y1);

// NaN - NaN is a JavaScript reserved word indicating that a number is not a legal number.
const x2 = 30;
const y2 = "helen";

console.log(x2 + y2); // 30helen
console.log(x2 / y2); // NaN
console.log(x2 * y2); // NaN

// Number Methods: toString(), toFixed(), toPrecision(), number(), parseFloat(), parseInt()

// toString() method: returns a number as astring.
const num1 = 457;
console.log(typeof num1);

const num1ToString = num1.toString();
console.log(typeof num1ToString); // Num1 is now a string

// toFixed(): returns a string, with the number written with a specified number of decimals:
let num2 = 5.679;

const num2TwoDecimals = num2.toFixed(2);
console.log(num2TwoDecimals);
console.log(typeof num2TwoDecimals); // string

// toPrecision(): returns a sring, with a number written with a specified length:
const num3 = 5.679;
const num3ToLength = num3.toPrecision(3);
console.log(num3ToLength); // 5.68
console.log(typeof num3ToLength); // string

// Number() method is used to convert different types of variables to number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // number 10
console.log(typeof Number("10"));
console.log(Number("1t0")); // NaN
console.log(Number("10 HELLO")); // NaN
console.log(Number("10.89")); // number 10.89

// parseInt() method converts/parses a string and returns a whole number (not including decimals). Spaces are allowed. Only the first number is returned:
console.log(parseInt(true)); // 1
console.log(parseInt(false)); // 0
console.log(parseInt("90")); // number 90
console.log(typeof parseInt("90")); // number
console.log(parseInt("30 HELLO")); // 30
console.log(parseInt("21 8 3")); // return 21
console.log(parseInt("30.43")); // number 30

// parseFloat() method converts/parses a string and returns a number (including decimals). Spaces are allowed. Only the first number is returned:
console.log(parseFloat(true)); // it returns NaN because parseInt converts strings to number and "true" is a boolean
console.log(parseFloat("90")); // number 90
console.log(typeof parseFloat("90")); // number
console.log(parseFloat("30 HELLO")); // 30
console.log(parseFloat("21 8 3")); // return 21
console.log(parseFloat("30.43")); // 30.43
