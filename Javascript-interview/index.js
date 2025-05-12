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
