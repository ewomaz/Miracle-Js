// JS objects are a list of comma seperated name:value pairs. Objects are written inside of literals-- {}

// objects in JS have properties(keys), values and methods

const person = { name: "John", age: 20, country: "Nigeria", height: 1.2 };
console.log(person);

// The values of the different properties of an object are accessed with their property name. There are two syntaxes for doing this:

// 1) dot notation syntax: object.property (recommended)
console.log(person.name);
console.log(person.country);

// 2) square bracket notations syntax: object['property]
console.log(person["height"]);
console.log(person["age"]);

// The values of an object can be modified/changed
const car = {
    brand: "Toyota",
    color: "red",
    model: 2020,
};

console.log(car);
car.color = "blue";
console.log(car);

// classwork: modify the model of the car object using the "square bracket" notation
console.log(car);
car["model"] = 1987;
console.log(car);

// We can have nexted object and arrays inside an object

const person2 = {
    fName: "Mary",
    lName: "Doe",
    age: 30,
    address: {
        city: "Oleh",
        state: "Delta",
        street: "Eka Street",
    },
    hobbies: ["Football", "reading", "cooking"],
    isMale: false,
    // An object method is a function stored in property... Continue After learning JS Functions
    fullDetails: function () {
        return `I am ${this.fName} ${this.lName} and I am ${this.age} years old`;
        // "this" refers to the object(owner of these properties)
        // the "this" keyword does not work with arrow function
    },
};

console.log(person2.fName);
console.log(person2.address.city);
console.log(person2.hobbies[2]);
console.log(person2.fullDetails());

// object.keys(): Returns an array of the properties and methods of an object
console.log(Object.keys(person));
console.log(Object.keys(person2));

// object.values(): Returns an array of values of an object
console.log(Object.values(person));
console.log(Object.values(person2));