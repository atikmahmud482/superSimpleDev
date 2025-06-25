/* 🧪 JavaScript Lesson 6: Fetch API + Promises + Async/Await
✅ 1. What is an API?
An API (Application Programming Interface) lets your website talk to another server to get or send data — like weather info, user profiles, movies, etc. */

// ✅ 2. The fetch() Function
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Users:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/* fetch() sends a request
.then() handles the result
.catch() handles any error */
