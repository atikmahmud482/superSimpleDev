// Lesson 1: Variables and Data Types

const myName = "Atik Al Mahmud";
const myAge = 25;
const isLearningJavaScript = true;

const favoriteThings = ["Coding", "Tea", "Problem Solving"];

const myProfile = {
  name: myName,
  age: myAge,
  favoriteSkill: "JavaScript",
  location: "Bangladesh",
};

console.log("👤 Name:", myName);
console.log("🎂 Age:", myAge);
console.log("📘 Learning JS:", isLearningJavaScript);
console.log("❤️ Favorite Things:", favoriteThings);
console.log("📄 Profile Object:", myProfile);

/* 🧪 JavaScript Lesson 2: Operators & Conditionals */
/* ✅ 1. JavaScript Operators
Operators let you compare, assign, and do math with variables. */
// 🔸 Arithmetic Operators:
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.33
console.log(x % y); // 1 (remainder)

// 🔸 Comparison Operators:
console.log(x > y); // true
console.log(x < y); // false
console.log(x == 10); // true (value match)
console.log(x === "10"); // false (type + value)
console.log(x != y); // true

// 🔸 Logical Operators:
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn || isAdmin); // true
console.log(!isLoggedIn); // false

/* ✅ 2. Conditionals (if, else, else if, switch) */

// 🔹 Basic if/else:
let age = 20;

if (age >= 18) {
  console.log("✅ You are an adult.");
} else {
  console.log("❌ You are a minor.");
}

// 🔹 else if:
let score = 85;

if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 80) {
  console.log("Grade: A");
} else {
  console.log("Grade: Below A");
}

// 🔹 switch statement:
let color = "blue";

switch (color) {
  case "red":
    console.log("Color is Red");
    break;
  case "blue":
    console.log("Color is Blue");
    break;
  default:
    console.log("Color not recognized");
}

/* ✅ 1. Functions
Functions let you reuse code. You define it once, then call it whenever needed. */

// 🔹 Function Declaration:
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Atik"); // Output: Hello, Atik!

// 🔹 Function with Return:
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8

// 🔹 Arrow Function (ES6):
const multiply = (x, y) => x * y;
console.log(multiply(4, 2)); // 8
