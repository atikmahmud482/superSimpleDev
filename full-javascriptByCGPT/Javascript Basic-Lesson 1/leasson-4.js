/* 🧪 JavaScript Lesson 4: DOM & Events
✅ 1. What is the DOM?
The DOM (Document Object Model) represents your HTML as a tree structure in JavaScript. You can use JS to:

Select elements

Change their content, style, or attributes

Respond to user actions (clicks, typing, etc.)

 */
// JS
const greeting = document.getElementById("greeting");
// const button = document.getElementById("changeBtn");

// Other selectors:
document.querySelector("h1"); // First <h1>
document.querySelector(".myClass"); // First element with class
document.querySelectorAll(".myClass"); // All elements with class

// ✅ 3. Changing Content or Style
greeting.textContent = "Welcome, Atik!";
greeting.style.color = "green";
greeting.style.fontSize = "24px";

// ✅ 4. Handling Events
button.addEventListener("click", () => {
  greeting.textContent = "You clicked the button!";
});

// ✅ 6. Example: lesson4.js
const input = document.getElementById("nameInput");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const name = input.value;
  if (name) {
    output.textContent = `Hello, ${name}! Welcome to JavaScript.`;
    output.style.color = "blue";
  } else {
    output.textContent = "Please enter your name!";
    output.style.color = "red";
  }
});
