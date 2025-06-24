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

// ✅ 3. Array of Objects (Common in real apps)
let users = [
  { name: "Atik", role: "Frontend" },
  { name: "Sami", role: "Backend" },
  { name: "Mira", role: "Designer" },
];

console.log(users[1].role); // "Backend"

/* ✅ 4. Useful Array Methods
🔹 forEach() – loop through all items */
skills.forEach((skill) => {
  console.log("Skill:", skill);
});

// 🔹 map() – return a new array
let upperSkills = skills.map((skill) => skill.toUpperCase());
console.log(upperSkills); // ["HTML", "CSS", "JAVASCRIPT", "TAILWIND"]
// 🔹 filter() – return only matching items
let longSkills = skills.filter((skill) => skill.length > 4);
console.log(longSkills); // ["HTML", "JavaScript", "Tailwind"]

// 🔹 find() – return the first match
let found = skills.find((skill) => skill === "CSS");
console.log(found); // "CSS"
// 🔹 push() / pop() – add/remove from end
skills.push("React");
skills.pop();
