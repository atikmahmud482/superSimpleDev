/* 🧪 JavaScript Lesson 5: Arrays, Objects & Array Methods
✅ 1. Arrays
An array holds multiple values in a single variable. */

let skills = ["HTML", "CSS", "JavaScript", "Tailwind"];
console.log(skills[0]); // "HTML"
console.log(skills.length); // 4

/* ✅ 2. Objects
An object stores key–value pairs. */

let user = {
  name: "Atik",
  age: 25,
  isDeveloper: true,
};

console.log(user.name); // "Atik"
console.log(user["age"]); // 25

// You can also update or add values:
user.age = 26;
user.country = "Bangladesh";
