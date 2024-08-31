/*
LOGICAL OPERATORS:
Logical operators are used to determine the logic between variables or values.

&& - AND
|| - OR
*/

let num1 = 20;
let num2 = 30;
let num3 = 10;
let num4 = 10;

// AND 
console.log(num1 < num2 && num4 > num1); // false

console.log(num2 < num4 && num1 < num3); // false

console.log(num2 > num4 && num1 > num3); // true

// OR
console.log(num1 < num2 || num4 > num1); //true

console.log(num2 > num4 || num1 > num3); // true