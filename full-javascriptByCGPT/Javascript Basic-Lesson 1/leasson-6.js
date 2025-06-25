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

// ✅ 3. Using async/await (cleaner way)
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log("Users:", users);
  } catch (err) {
    console.log("❌ Error fetching users:", err);
  }
}

getUsers();
