// No-1:  What is JavaScript and its common uses?
/* javaScript is lightweight, interpreted scripting language used to build dynamic web content  */

// No-2: What are template literals in JavaScript?
/* let a = 10;
let b = 34;
console.log(`sum or ${a} and ${b} is ${a + b}`); */

// No-3: What is hoisting? Provide an example.
/* console.log(a); // undefined error
var a = 1;

console.log(b); // reference error
console.log(c); // reference error
let b = 3;
const c = 5; */

// No-4: Difference between let, var, and const.
/* var is a function scope variable.
let is a block scope variable.
const is a block and not reassign variable. */

// No-5: Data types in JavaScript.
/* 2 Type : Primitive & Non-Primitive
-Primitive (7): data types are immutable.
string, number, boolean, nul, undefined, symbol, BigInt.
-Non-Primitive(3): data types are mutable.
Function,array,object */

/* // No-6: What is an array, and how to access its elements?
An array or JavaScript is an ordered collection of values or elements, elements stored in the array can be of any data type but they all must belong to the same data type.

In JavaScript, you can create an array either using the array literal syntax.
let fruits = ["apple", "banana", "cherry"] 

Or you can the road not taken with array constructor.
let numbers = new Array(10, 20, 30);

if you want to access a specific element in the array
you can directly access them their indexes. 
let fruits = ["apple", "banana", "cherry"] 
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

or, if you want to iterate through the whole array, then you can use a for-loop
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i])
}

or make it even simpler and use a for each loop 
fruits.forEach(fruit => console.log(fruit)) */

// No-7: Difference between == and ===.
/* == (loose equality) compares two values for equality after converting both values to a common type.
=== (strict equality) compares two values without performing type conversion. The values must be of the same type and value to be considered equal.
'5' == 5    // true  → because '5' is converted to number
'5' === 5   // false → because the types are different (string vs number)
null == undefined  // true  → loosely equal
null === undefined // false → not strictly equal
0 == false  // true  → type coercion
0 === false // false → different types */

/* // No-8: What is the purpose of the isNaN function?
The isNaN() function in JavaScript is used to determine whether a value is "NaN" (Not-a-Number) — that is, a value that is not a valid number.

isNaN(123)         // false → 123 is a valid number
isNaN('123')       // false → '123' gets converted to 123
isNaN('hello')     // true  → can't convert 'hello' to a number
isNaN(NaN)         // true  → NaN is literally "Not a Number"
isNaN(undefined)   // true  → undefined → NaN */

/* // No-9: What is null vs undefined?
In JavaScript, null and undefined both represent the absence of a value, but they are not the same and are used in different contexts:

undefined
Meaning: A variable has been declared but has not been assigned a value yet.
Set by: JavaScript automatically.
Type: undefined (primitive type)

let x;
console.log(x); // undefined

null
Meaning: A variable has been explicitly assigned to have "no value".
Set by: Developer
Type: object (this is a historical bug in JS)

let y = null;
console.log(y); // null */
/* 
// No-10: Use of the typeof operator.
The typeof operator in JavaScript is used to check the data type of a given value or variable.

let name = "Atik";
console.log(typeof name); // "string"

let count = 5;
console.log(typeof count); // "number" */

/* // No-11: Purpose of the map method in JavaScript.
// To transform elements of an array without modifying the original array.

const numbers = [2, 3, 4, 5];
const newNumbers = numbers.map((num) => num * 2);
console.log(newNumbers); */

/* // No-12:  Explain event bubbling and event capturing.
Event bubbling and event capturing are two phases of event propagation in the DOM (Document Object Model) when an event (like a click) occurs on an element. They determine the order in which elements receive the event.

Event Capturing (Trickling Down)
element.addEventListener('click', handler, true); // 'true' = useCapture

 Event Bubbling (Bubbling Up)
 element.addEventListener('click', handler); // 'false' or omitted = bubbling

 For an event on a <button> inside a <div> inside the <body>:

 Capturing: body → div → button
Target: button
Bubbling: button → div → body */

/* // No-13: What are higher-order functions? Provide an example.

A higher-order function is a function that does at least one of the following:
Takes another function as an argument, or
Returns a function as a result.
Higher-order functions are a key feature in JavaScript and other functional programming languages.

Example 1: Function That Takes Another Function
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Atik";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Atik!

Example 2: Function That Returns Another Function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10 */
