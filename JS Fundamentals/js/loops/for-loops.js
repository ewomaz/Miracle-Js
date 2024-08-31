// Loops can execute a block of code a number of times, Loops ara handy if you want to run the same code over again, ecah time with a different value.

/*
The for loop has the following syntax:

for (statement 1; statement 2; statement 3){
    // code block to be executed
}
*/

// Statement 1: Initializes the loop. and it is executed (one time) before the execution of the code block

//  Statement 2: Defines the condition for executing the code block.

// Statement 3: Is executed (every time) after the code block has been executed.

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("new loop");

let j = 10;

for (j; j <= 20; j++) {
  console.log(j);
}

console.log("New loop");

let k = 20;
for (k; k > 10; k--) {
  console.log(k);
}

// Using the forloop with Arrays: The forloop is the best loop for looping through arrays
let cars = ["Benz", "Venza", "Volvo", "Jeep"];

let a = 0;
for (a; a < cars.length; a++) {
  console.log(cars[a] + "BLAH");
}

console.log("new loop");
let colors = [3, 2, 10, 20, 40];
let q = 1;
let len = colors.length;
for (q; q < len; q++) {
  console.log(colors[q] + 2);
}
