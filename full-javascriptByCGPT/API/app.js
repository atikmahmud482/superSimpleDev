// 🧪 Lesson 9: Real Project — Movie Search App using API 🎬
// 🧠 What You'll Learn/Use:
// fetch() with async/await (API)

// Event handling

// DOM manipulation

// Error handling

// Loading state (optional)

// Responsive design (optional bonus)

/* ✅ 1. Project Overview
You’ll build a Movie Search App using the OMDb API.
Users will enter a movie name → fetch results → display poster, title, year.

🧰 API Info (Free to use)
URL: https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=movieName
🔑 Get your free API key here: https://www.omdbapi.com/apikey.aspx

You can start with this demo key (for testing): 
apikey=8ba1e4d8
*/

const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const results = document.getElementById("results");

const API_KEY = "8ba1e4d8"; // Replace with your own if needed
