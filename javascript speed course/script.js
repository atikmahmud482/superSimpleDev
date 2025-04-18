// const prompt = require("prompt-sync")();

// const v = prompt("type something");
// console.log(v);

/*
 data types
 ---------------- 
string
boolean
number
undefined
null
*/

// variable
/* var x = "hello";
x = "world";

let y = 5;

const z = 3; */

//Arithmetic Operators & Type Coercion
/* const x = 5;
const y = "5";

console.log(y * x);
console.log(y / x);
console.log(y + x);
console.log(y - x); */

//Type Conversions
// const x = "345";
/* const x = "3445.455fld";
const y = 3;

console.log(Number(x) + y);
console.log(parseInt(x) + y);
console.log(parseFloat(x) + y); */

// Comparison Operators
/* console.log(undefined === null);
console.log("1" === 1);
console.log("1" == 1); */

//Logical Operators
// && || !
/* console.log(true && "hello");
console.log(false && "hello");
console.log(!false && "hello");
console.log(true || false);
console.log(true && false);
console.log("" || false); */

//Conditionals(if/else if/else)
/* if (true) {
  console.log("Hello world!");
} else if (false) {
  console.log("first");
} else {
  console.log("second");
} */

/* const cond = 3 < 5 ? "okay cool" : "no";
console.log(cond);
 */

//Switch Statement
/* const value = 4;

switch (value) {
  case 4:
    console.log("3 is cool");
    break;
  case 3:
    console.log("4 is cool");
    break;
  default:
    console.log("okay");
    break;
} */

// Javascript Array
const arr = [1, 2, 3, 4, true];
const arr2 = new Array(5);
console.log(arr);
const arr3 = Array.from("hello");
console.log(arr3);
arr3[0] = "y";
console.log(arr3);

// arr3.push(4);
// arr3.push;
// arr3.shift();
// const arr4 = arr.concat(arr3);
// const arr4 = arr.slice(1, 3);
const arr4 = arr.splice(1, 3);
console.log(arr4);
