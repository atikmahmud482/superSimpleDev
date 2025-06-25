/* 🧪 JavaScript Lesson 7: Modules + Local Storage
✅ 1. What Are JavaScript Modules?
Modules let you split your code into separate files and reuse them.
Perfect for organizing large projects. */
/* 
🔹 How to Use Modules (ES6 Style)
Step 1: Create a module file (e.g., utils.js)
*/

export function greet(name) {
  return `Hello, ${name}!`;
}

export const appName = "Super JS App";

// Step 2: Import in your main file (e.g., main.js)
import { greet, appName } from "./utils.js";

console.log(appName);
console.log(greet("Atik"));
// Step 3: In your HTML, set type="module"
<script type="module" src="main.js"></script>;
/* ✅ Modules must be used via a local server (VS Code Live Server, or deployed online) — opening with file:// won’t work. */
