// toString(): This method converts an array to a string
const names = ['John', 'Mary', 'Andrew', 'Peter'];
console.log(names) // array of names

const arrayToString = names.toString();
console.log(arrayToString); // string
console.log(typeof arrayToString);

// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
console.log(names.join());
console.log(names.join('/'));

// pop(): This method removes the last element from an array and return the item.
const cars = ['volvo', 'camry', 'toyota', 'benz']
const lastItemOut = cars.pop();
console.log(cars);
console.log(lastItemOut); // The pop() method returns the popped item (benz)

// Push(): This method Appends(Adds) new elements to the end of an array, and return the new length of the array.
const cars2 = ['venza', 'camry', 'toyota',];
const addToEnd = cars2.push('volvo', 40);
console.log(cars2);
console.log(addToEnd) // The Push() method returns the new length of the array(5)

// unshift(): This method inserts new elements at the start of an array, and returns the new length of the array.
const fruits = ['mango', 'pear', 'orange'];
const addToStart = fruits.unshift('pineapple', 'apple', 'guava');
console.log(fruits);
console.log(addToStart) // the new length of the array

// shift(): Removes the first element from an array and returns it.
const fruits2 = ['apple', 'mango', 'pear', 'orange'];
const removeFirstItem = fruits2.shift();
console.log(fruits2);
console.log(removeFirstItem); // the item that was removed

// Splice(): This method can be used to add new items to an array. This method takes up to 2 parameters. The first parameter defines the position where new elements should be added (spliced in). The second parameter defines how many elements should be removed.

const names2 = ['John', 'Mary', 'Andrew', 'Peter'];
names2.splice(1, 2, 'Cynthia', 'Jane', 30);
console.log(names2);

// The splice() method can also be used to delete items from any position in an array. The first parameter defines the position where new elements should be added (spliced in). The second parameter defines how many elements should be removed. But in this case new items won't be added since we only want to delete existing items in the array
const fruits3 = ['apple', 'mango', 'pear', 'orange'];
fruits3.splice(2, 1);
console.log(fruits3);

// The slice() method is used to an array. It does not change the original array. It can take up to two parameters like slice(1, 3). The method then selects elements from the start parameter, and up to (but not incliuding) the end parameter.
const fruits4 = ['berry', 'grape', 'pear', 'orange'];
const sliceArray = fruits4.slice(1, 3) // return a new array with the slice items
console.log(sliceArray);

const fruits5 = ['berry', 'grape', 'orange'];
const slicedArray2 = fruits5.slice(2);  // this will slice from position 2 to the last item of the array because an end argument was not specified
console.log(slicedArray2);


// concact(): This method is used to add arrays
const food = ['rice', 'beans', 'indomie'];
const place = ['Oleh', 'Ughelli', 'Ozoro'];
const boys = ['John', 'Peter', 'Mark'];

const combineArrays = food.concat(place, boys);
console.log(combineArrays);

// Array sorting: The sort() method is used to sort an array 

const randomArray = ["cat", "elephant", "chicken", "apple", "ball"];
console.log(randomArray); // original Array
// sorting in ascending order
randomArray.sort();
console.log(randomArray);

// The reverse() method is used in sorting in descending order. You have to sort() first before reverse()
const randomArray2 = ["cat", "elephant", "chicken", "apple", "ball"];
randomArray2.sort().reverse();
console.log(randomArray2);

// Sorting Numbers:
// when sorting number always use the compare function: array.sort(function(x, y){return x - y});

let randomNums = [100, 3, 1, 10, 4, 6];
randomNums.sort(function (x, y){return x - y;}); // ascending order
console.log(randomNums);

let randomNums2 = [100, 3, 1, 10, 4, 6];
randomNums2.sort(function (x, y){return y - x;});  // descending order
console.log(randomNums2);
