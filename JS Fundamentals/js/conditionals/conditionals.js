// Conditional statement are used to perform different actions based on different conditions.

/*
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- if statement: is used to specify a block of code to be executed, if a specified condition is true

- else statement: is used to specify a block of code to be executed, if the same condition is false

- else if statement: is used to specify a new condition to text, if the first condition is false

if (condition1) {
    // block of code to be executed if condition1 is true
} 
else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
}
else {
    // block of code to be executed if the condition1 is false and condition is false
}
*/

const num = 100;
if (num > 200) {
  console.log("Num is greater than 200");
} else if (num === 100) {
  console.log("Num is equal to 100");
} else if (num < 10) {
  console.log("Num less than 10");
} else {
  console.log("Invalid num");
}

const age = 17;
let text;

if (age === 18) {
  text = "Age is equal to 18";
} else if (age === 10) {
  text = "Age is equal to 10";
} else if (age === 13) {
  text = "Age is equal to 13";
} else {
  text = "No values match";
}

console.log(text);

// Shorthand if and else statement: The ternary operator is a conditional operator that assigns a value to a variable based on some condition.

/*
syntax: variablename = (condition) ? value1:value2

*/

// using if and else statement
const age1 = 18;
if (age1 > 18) {
  console.log("can drink");
} else {
  console.log("cannot drink");
}

// ternary operator(?)
const age2 = 20;
const output = age2 > 18 ? "can vote" : "cannot vote";
console.log(output);
