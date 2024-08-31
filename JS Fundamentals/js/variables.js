// Varibles are containers that store data. Js Variables are also referred to as ïdentifiers

// These variables are usually declared with keywords (var/let/const).

var person = "John Doe"
let age = 30
const person2 ="Mary doe"

console.log(person);
console.log(person2);
console.log(age);

// differences between var, let and const

// ====> 1) --Redecleration

// Varibles/identifiers declared with "var" can always be re-declared
var human = "Miracle James"; //declearation
var human = "Cynthia James"; //redeclearation
var human =24 ; //redeclearation
console.log(human);

// variables/identifiers declared with "let" cannot be re-decleared
let color = "red";
// var color = "blue"; ----> This line will give you error that says you cannot re-declare color variable

// let color = "blue"; ----> This line will give you error that says you cannot re-declare color variable

// const color = "pink"; ----> This line will give you error that says you cannot re-declare color variable

console.log(color);

// variables/identifiers decleared with "const" cannot be re-declared
const points = 20;
// var points = "68"; ----> This line will give you error that says you cannot re-declare points variable

// let points = "30"; ----> This line will give you error that says you cannot re-declare points variable

// const points = "20"; ----> This line will give you error that says you cannot re-declare points variable
console.log(points);

// ====> 2) -- Re-assignment

// Variables/identifiers declared with "var" can be re-assigned a new value

var color2 = "yellow"; //declearation
color2 = "blue"; //re-assignment

console.log(color2);

// Variables/identifiers declared with "let" can be re-assigned a new value
let score = 0; // declearation
score = 10; //re-assignment
console.log(score);

// Variables/identifiers declared with "const" can be re-assigned a new value
const country = "Nigeria"; //declearation
// country = "London"; // re-assignment. This will throw an error that says "You are trying to assign a new value to a constant variable"
console.log(country);

// 3) - Initialization: Another Difference between var, let, and const is that with let and var, a variable can be initialized without assigning a value to it. But this will not work with const. A variable initialized with const must be assigned a value immediately

var points11; //initialization
points11 = 20; // re-assignment
console.log(points11);

let score11; //initialization
score11 = 40; //re-assignment
console.log(score11)

/* 
    const grade; // it will but show an error
    grade = 30;
*/