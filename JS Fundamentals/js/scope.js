// Globally Scoped variables: These variables are declared outside of a function and as such they can be accessed antwhere in the script. --- Global scope

// Locally scoped variables: These variables are declared inside of a function and as such they can only be accessed inside the said function. --- function/local scope. All function/local scoped variables can also be referred to as block scoped variables if they are declared with let or const. Variables declared with let or const. Variables decleared with var cannot have block scope

// Block scope: in JavaScript refers to the visibility and accessibility of variables declared within a block of code, such as within a pair of curly braces {}. Before the introduction of ES6(ECMAScript 2015), Javascript only had function scope and global scope. With ES6, the let and const keywords were introduced, which allow for block-scoped variables.

///////////====> global scope

const boy = "John"; // globally scoped variables

console.log(boy); // boy can be accessed here

function MyFunction() {
    console.log(boy); // boy can be accessd here
}

MyFunction();

///////////======> function scope
function myFunction1() {
    let girl = "Precious";  // locally scoped variables
    console.log(girl); // girl can be accessed here
}

myFunction1();
// console.log(girl)  // girl cannot be accessed outside the function 

//////====> Block Scope. Only variables declared with let or const can have block scope

if (true) {
    let x = 10;
    console.log(x); // x is visible here
}

// console.log(x); // x is not visible here. x is not defined

// In the example below, the variable y is declared using let within the if block. This means that y is only accessible within that block. Attempting to access y outside of the block will result in a ReferenceError because it's out of scope.

function foo() {
    if (true) {
        let y = 20; // y is block-scoped to the if block
        console.log(y); //Output: 10
    }
    // console.log(y); // ReferenceError: y is not defined
}

foo();

function foo2() {
    if (true) {
        var y = 60; // y is not block-scoped to the if block because var  was used.
        console.log(y); // y can be accessed here
    }
    console.log(y); // y can also be accessed here
}

foo2();

// In javascript, block scope and local scope often used interchangeably, but they are not precisely the same thing. so, while all variables with local scope are block-scoped (if they're declared with let or const), not all block-Scoped variables are necessarily local variables. Block scope is a broader concept that encompasses both function scope and other types of block scopes.