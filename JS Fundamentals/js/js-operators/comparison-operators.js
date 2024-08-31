/*
COMPARISON OPERATORS: Comparison operators are used in logical statements to determine equality or difference between variables or values. Comparison operators return "true" or "fasle"
<
>
<=
>=
== equal in value
=== equal in value and type
!= not equal to 
*/

// <, >
let num1 = 20;
let num2 = 30;

console.log(num1 > num2) // false
console.log(num2 > num1) // true
console.log(num1 < num2) // true

// <=, >=
let num3 = 10;
let num4 = 10;

console.log(num3 <= num4) //true
console.log(num3 >= num4) //true

let num5 = 13;
let num6 = 10;

console.log(num5 <= num6) //false
console.log(num5 >= num6) //true

// == (equality) equal in value
let num7 = "20";
let num8 = 20;

console.log(num7 == num8) // true because == checks only the value and ignored the data-type

// === strict equality (equal in value and type)
let num9 = "20";
let num10 = 20;

console.log(num9 === num10) // false because === checks both the value and the data-type

let num11 = "20";
let num12 = "20";

console.log(num11 === num12) // true because num11 and num12 are equal in value and data-type

// != (not equal to): checks only the value
let num13 = "10";
let num14 = 10;
console.log(num13 != num14) // false because num13 and num14 are equal in value

// !== (not equal to): checks both the value and data-type
let num15 = "10";
let num16 = 10;
console.log(num15 !== num16) // true because num15 and num16 are not equal in value and in data-type

let num17 = "10";
let num18 = "10";
console.log(num17 !== num18) // false because num17 and num18 are equal in value and in data-type