/* 🧪 JavaScript Lesson 4: DOM & Events
✅ 1. What is the DOM?
The DOM (Document Object Model) represents your HTML as a tree structure in JavaScript. You can use JS to:

Select elements

Change their content, style, or attributes

Respond to user actions (clicks, typing, etc.)

 */
// JS
const greeting = document.getElementById("greeting");
const button = document.getElementById("changeBtn");

// Other selectors:
document.querySelector("h1"); // First <h1>
document.querySelector(".myClass"); // First element with class
document.querySelectorAll(".myClass"); // All elements with class

// ✅ 3. Changing Content or Style
greeting.textContent = "Welcome, Atik!";
greeting.style.color = "green";
greeting.style.fontSize = "24px";
