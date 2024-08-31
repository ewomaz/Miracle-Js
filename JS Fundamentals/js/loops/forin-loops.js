// The JavaScript for/in statement loops through the properties of an object:

// The for in loop iterates over an object
// Each iteration returns a key (X)
// The key is used to access the value of the properties
// The value of the key is object[X]

/*
synyax:
    for(keys in object){
        object[keys]
    }
*/

const person = { fname: "John", lname: "Doe", age: 25 };
for (x in person) {
  // console.log(x); // the object keys
  console.log(person[x]);
}

const car = {
  color: "red",
  brand: "Toyota",
  model: 2020,
};

for (z in car) {
  console.log(car[z]);
}

// loop through the object below
let book = {
  title: "The world in our pocket",
  author: "Mary Doe",
  vol: 30,
};
