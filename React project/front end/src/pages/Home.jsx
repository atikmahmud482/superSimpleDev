import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2022" },
    { id: 2, title: "Inception", release_date: "2010" },
    { id: 3, title: "The Dark Knight", release_date: "2008" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(""); // Optional: Clear input after search
  };

  // Filter movies (case-insensitive)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p>No movies found. Try another search!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
