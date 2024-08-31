// Functions are used to store code. This codes will not run/execute only when the function is called 

// 1) function as a function statement: This type of "function" uses the function keyword and a function name

function myFunction() {
    console.log("I am a function");
}

myFunction(); // function call

//2) function as a function expression: This type of function uses the "function" keyword but does not use a function name. Instead it uses a variable to represent it.

const myFunction2 = function () {
    console.log("do something");
};

myFunction2();

// 3) function as an arrow function: This type of function does not use the "function" keyword and a function name. Instead it uses a variable to represent it.

const doSomethingAgain = () => {
    console.log("do something again");
};

doSomethingAgain();