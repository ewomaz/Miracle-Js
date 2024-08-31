// Arrays are special variables that holds/stores multiple values. These values can be of different data type.

// arrays are defined using the square bracket[]. The values of an array are accessed with their index

const cars = ["Volvo", "Camry", "Toyota"];
console.log(cars);

// Acessing items in an array
const firstCar = cars[0];
console.log(firstCar);

let randomArray = ["John Doe", 30, true, "Duplex"];
console.log(randomArray); //entire array
console.log(randomArray[0]); // john doe
console.log(randomArray[2]); // true

// Modifying items in an array
const cars2 = ["toyota", "camry", "volvo", "benz", "g-wagon"];
console.log(cars2);

cars2[0] = "Venza";
cars2[3] = "Lexus";
console.log(cars2);

// The length of an array: This is the actual count of items in the array
console.log(cars.length);
console.log(cars2.length);

// getting the last item of an array using the length property, This trick is very important to know
console.log(cars2[cars2.length - 1]);

// we can have objects in an array
const books = [
  { title: "How to learn Programming", author: "John Doe", vol: 20 },
  { title: "How to cook Sweet Jollof", author: "Precious Andrew", vol: 1 },
  { title: "How to bake cake", author: "Mary Peters", vol: 2 },
  { title: "How to learn Gaming", author: "John Doe", vol: 2 },
];

console.log(books);

//1. log the first book to the console
//2. log the author of the second book to the console
//3. log the last book to the console without using the index

console.log(books[0]);
console.log(books[1].author);
console.log(books[books.length - 1]);

//4. do the below code again but this time use an array iterator method
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

// Answer to question 4
books.forEach((book) => console.log(book.title));

//5. Use an array iterator method to log books written by john doe
const booksByJohnDoe = books.filter((book) => book.author == "John Doe");
// const booksByJohnDoe = books.filter((book) => {
//   return book.author == "John Doe";
// });

console.log(booksByJohnDoe); // array of books written by John Doe

//6. log the title of the books written by John Doe using an array iterator
booksByJohnDoe.forEach((book) => console.log(book.title));

//7. get the total of all books vol using an array iterator method
const totalBooksVol = books
  .map((book) => book.vol)
  .reduce((total, value) => total + value);

console.log(totalBooksVol);

//8. get all the books written by "John Doe" and "Precious Andrew" using array iterator method
const booksbyJohnDoeandAndrewprecious = books.filter(
  (book) => book.author === "John Doe" || book.author === "Precious Andrew"
);

console.log(booksbyJohnDoeandAndrewprecious);
