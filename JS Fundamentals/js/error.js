// The try statement lets you text a block of code for errors.

// The catch statement lets you handle the error.

// The throw statement lets you create custom errors.

// The finally statement lets you execute code, after try and catch, regardless of the result.

// A ReferenceError is thrown if you use (reference) a variable that has not been declared.

// A SyntaxError is thrown if you try to evaluate code with a syntax error.

// A TypeError is thrown if you use a value that is outside the range of expected types.

// let y = 10;
// let z = 10;

// let x = y + z;
// console.log(x);

try {
  let y = 10;
  // let z = 10;

  let x = y + z;
  console.log(x);
} catch (err) {
  // alert(err);
  console.log(err); // this gives you the entire error object
  console.log(err.name); // this gives you the error name
  console.log(err.message); // this gives you the error message
}

try {
  let name = 40;
  name.toUpperCase();

  // let name = 'hello'
  // name.toUpperCase()
  // console.log(name)
} catch (err) {
  console.log(err); // this gives you the entire object
  console.log(err.name); // this gives you the error name
  console.log(err.message); // this gives you the error message
}

// play project
function myFunction() {
  const myInput = document.getElementById("myInput").value;
  let error = document.getElementById("error");
  // reset the error element
  error.innerHTML = "";
  // console.log(myInput);

  try {
    if (myInput === "") throw "Input is empty";
    if (myInput < 6) throw "Input is less than 6";
    if (myInput > 10) throw "Input is greater than 10";
    if (isNaN(myInput)) throw "Input is not a valid Number";
  } catch (err) {
    error.innerHTML = err;
  }
}
