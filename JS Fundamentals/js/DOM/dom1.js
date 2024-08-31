// DOM STANDS FOR - DOCUMENT OBJECT MODEL.

// DOM is the standard for modifying HTML elements. It treats the document as a tree of nodes

/*
    html selectors, changing the contents of html elements, changing styles of elements, parentNodes and ParentElement, childNodes and Elements, creating new html elements, cloning html elements, events, todolist Project
*/

// html selectors are used to select elements from the DOM

// document.getElementById(), document.getElementsByClassName(), document.getElementsByTagName(), document.querySelector(), document.querySelectorAll().

const myHeading1 = document.getElementById("heading1");
console.log(myHeading1);
// myHeading1.innerHtml = 'Hello';
// myHeading1.innerText = 'Hello';
// myHeading1.textContent = 'Hello';

// difference between innerHtml, innerText and textContent

let h11 = document.getElementById("heading11");

console.log(h11.innerHTML); // this gives you everything inside the open and close tag of an element and that includes html elements as well

console.log(h11.innerText); // this gives you the text content but pays attention to the styles inside of the element

console.log(h11.textContent); // this just gives you the text content of an element

// getting the children of an element
let ul = document.getElementById("list");
console.log(ul.children); // children of the ul
console.log(ul.firstElementChild); // first child of the ul
console.log(ul.lastElementChild); // last child of the ul
console.log(ul.children[1]); // this gives you the second child of the ul

// change the third child of the ul to display the text "I am fine"
ul.children[2].innerHTML = "I am fine";
ul.children[2].style.FontSize = "20px";
ul.children[2].style.color = "red";
ul.children[2].style.backgroundColor = "blue";
