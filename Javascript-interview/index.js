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

/* // No-14:  What is an IIFE (Immediately Invoked Function Expression)?
IIFE stands for Immediately Invoked Function Expression. It's a function that runs as soon as it is defined, without needing to be called separately.

(function() {
  // code inside IIFE
  console.log("This runs immediately!");
})(); */
/* 
// No-15: Explain closures in JavaScript.
A closure is a function that "remembers" the variables from its lexical scope, even when the function is executed outside that scope.

Definition (In Simple Terms)
A closure is created when a function is defined inside another function, and it accesses variables from the outer function.

function outer() {
  const outerVar = "I am from outer";
  function inner() {
    console.log(outerVar); // inner function uses outerVar
  }
  return inner;
}
const closureFunc = outer();
closureFunc(); // Output: I am from outer */

/* // No-16: How do setTimeout and setInterval work?
⏱️ setTimeout and setInterval in JavaScript
Both setTimeout and setInterval are asynchronous functions provided by the browser (or Node.js) to schedule code execution.

They work by delegating timing tasks to the JavaScript Event Loop using the Web APIs.

1. setTimeout()
Executes a function once after a specified delay.
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

2. setInterval()
setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

❌ Clearing Timers
To stop setTimeout or setInterval, use:
clearTimeout(timeoutID)
clearInterval(intervalID)

const intervalID = setInterval(() => {
  console.log("Still running...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
  console.log("Stopped after 5 seconds");
}, 5000); */

/* // No-17:  Describe promises in JavaScript.
State	    Description
pending	    Initial state, neither fulfilled nor rejected
fulfilled	The operation completed successfully
rejected	The operation failed

Creating a Promise--
const promise = new Promise((resolve, reject) => {
  // async operation
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong.");
  }
});

 Consuming a Promise--
 promise
  .then(result => {
    console.log(result); // "Operation successful!"
  })
  .catch(error => {
    console.error(error); // "Something went wrong."
  })
  .finally(() => {
    console.log("Promise is settled.");
  });

  Real-World Example--
  function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

fetchData().then(data => console.log(data)); // Output after 2s: "Data fetched!" */

/* // No-18:  Use of async and await in JavaScript.
The async and await keywords are modern syntax built on top of Promises to make asynchronous code look and behave like synchronous code — improving readability and maintainability.

✅ async Keyword
Declares a function as asynchronous.
An async function always returns a Promise, even if it returns a value directly.

async function greet() {
  return "Hello!";
}

greet().then(console.log); // Output: Hello!

✅ await Keyword
Can only be used inside an async function.
Pauses the execution of the function until the Promise is resolved or rejected.
Returns the resolved value of the Promise.

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result); // Output after 2s: "Data loaded"
}

getData(); */

/* // No-19: Difference between call, apply, and bind.
All three methods — call(), apply(), and bind() — are used to set the value of this inside a function and optionally pass arguments. They come from Function.prototype and are useful when you want to reuse functions in different contexts.

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function sayHi() {
  console.log(`Hi, I'm ${this.name}`);
}

sayHi.call(person1); // Hi, I'm Alice
sayHi.call(person2); // Hi, I'm Bob */

/* // No-20: What is event delegation?
Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding listeners to each individual child element.

This works because of event bubbling — events move up from the target element to its ancestors.

✅ Example Without Delegation
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  });
});

✅ Example With Event Delegation
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
}); */

/* // No-21 Explain the event loop in JavaScript. 
The event loop in JavaScript is a core concept that allows non-blocking asynchronous operations, despite JavaScript being single-threaded.

🧠 Key Concepts
Call Stack

This is where functions are pushed when called and popped when returned.

JavaScript runs code synchronously in the call stack.

Web APIs (Browser APIs)

When you use functions like setTimeout, fetch, or event listeners, they are handled by the browser's Web APIs (not the call stack).

Callback Queue (Task Queue)

After async operations complete, their callback functions are pushed into this queue.

Microtask Queue

Contains promises and other microtasks.

Microtasks are prioritized and executed before the callback queue.

Event Loop

Constantly checks:

Is the call stack empty?

If yes, it pushes the next task (first microtasks, then callback queue) to the stack.

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

1
4
3
2 */

/* // No-22:  Difference between promises and async/await.
The difference between Promises and async/await in JavaScript lies mainly in syntax and readability — both are used to handle asynchronous operations, but they offer different styles of doing so.

🔸 Promises
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

  🔹 async/await
async/await is syntactic sugar built on top of promises that makes async code look and behave like synchronous code.

async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
} */

/* // No-23: Purpose of the reduce method in arrays. 
🔹 Purpose of reduce()
The reduce() method is used to combine all elements of an array into a single value.

array.reduce((acc, curr) => newAcc, initialValue);

acc = accumulator (result so far)

curr = current element

initialValue = starting value

🔸 Examples
1. Sum numbers: [1, 2, 3, 4].reduce((sum, n) => sum + n, 0); // 10

2. Flatten array: [[1, 2], [3], [4]].reduce((a, b) => a.concat(b), []); // [1, 2, 3, 4]
3. Count items: ['a', 'b', 'a'].reduce((acc, c) => {
                    acc[c] = (acc[c] || 0) + 1;
                     return acc;
                 }, {}); // { a: 2, b: 1 } */

/* // No-24: Explain currying in JavaScript.
🔹 What is Currying in JavaScript?
Currying is a technique where a function with multiple arguments is transformed into a series of functions that each take one argument.
Without currying:
function add(a, b) {
  return a + b;
}
add(2, 3); // 5
With currying:
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(2)(3); // 5

✅ Real-World Use Case
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
sayHello("Atik"); // "Hello, Atik!" */

/* No-25: What is a generator function and its usage?  
A generator function allows you to pause and resume execution using the yield keyword.

It’s declared with function* and returns a Generator object.

function* generatorFunc() {
  yield 'A';
  yield 'B';
  yield 'C';
}

✅ Usage:
const gen = generatorFunc();

console.log(gen.next()); // { value: 'A', done: false }
console.log(gen.next()); // { value: 'B', done: false }
console.log(gen.next()); // { value: 'C', done: false }
console.log(gen.next()); // { value: undefined, done: true } */

/* // No-26: What are weak maps and weak sets in JavaScript?
They are special collections that store objects only as keys (WeakMap) or values (WeakSet) and allow those objects to be garbage collected when no longer in use.
✅ WeakMap
A collection of key-value pairs.

Keys must be objects, not primitives.

Does not prevent garbage collection of the key object.

Not iterable (you can't loop over it).

🔸 Syntax:
const wm = new WeakMap();
const obj = {};

wm.set(obj, "secret");
wm.get(obj); // "secret"

wm.delete(obj); // true

✅ WeakSet
A collection of unique object values.

Only objects can be added.

Not iterable and has no .size property.

🔸 Syntax:
const ws = new WeakSet();
const user = {};

ws.add(user);
ws.has(user); // true

ws.delete(user); // true

🔒 Use Cases
Private data storage for objects (WeakMap)
Tracking object presence without preventing garbage collection (WeakSet) */
