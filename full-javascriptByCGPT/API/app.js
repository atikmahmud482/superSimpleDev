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
button.addEventListener("click", async () => {
  const query = input.value.trim();

  if (!query) {
    results.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  results.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();

    if (data.Response === "True") {
      results.innerHTML = ""; // clear previous

      data.Search.forEach((movie) => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.innerHTML = `
          <img src="${
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/100"
          }">
          <div>
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
          </div>
        `;
        results.appendChild(div);
      });
    } else {
      results.innerHTML = `<p>No results found for "${query}".</p>`;
    }
  } catch (err) {
    results.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    console.error(err);
  }
});

/* ✅ Project Complete!
You now have:
✅ API fetching
✅ DOM rendering
✅ Dynamic UI interaction
✅ Real data app */
