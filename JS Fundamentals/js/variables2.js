// identifiers can contain letters, digits, underscores, and dollar signs.
let hello43_$ = "hello world";
console.log(hello43_$);

// identifiers can also begin with $ and _
let $blah20 = true;
console.log($blah20);

let _$blah20 = false;
console.log(_$blah20);

// identifiers cannot begin with a digit

/*
    const 2hello = 'hello' // this will not work
    console.log(2hello)
*/

// identifiers are case sensitive (y and Y are different variables)
const x =20;
// console.log(X)  // X here is undefined becos x is not same as X
console.log(x);

// Reserved words (like JavaScript Keywords) cannot be used as variables names or identifiers.

// Assignment: List 15 javascript reserved keywords that cannot be used as variable names.

/* Ans:
    1, break
    2, case
    3, catch
    4, class
    5, const
    6, continue
    7, default
    8, delete
    9, if
    10, in
    11, function
    12, import
    13, export
    14, finally
    15, for 
*/

// ----------->  one declearation Keyword can be use for many Identifiers (and seperating with comma)
let person = "John", age =20, isMale = true;
console.log(person, age, isMale);

// The above is same as:

/*
    let person = 'John'
    let age = 20
    let isMale = true
*/

const name = "cynthia", age2 = 49, isMale2 = false;
console.log(name, age2, isMale2);

// The above is same as:

/*
    const name = çynthia'
    const age2 = 49
    const = isMale2 = false
*/