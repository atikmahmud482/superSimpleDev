import MovieCard from "../components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "jhon wick", release_date: "2022" },
    { id: 1, title: "jhon wick", release_date: "2022" },
    { id: 1, title: "jhon wick", release_date: "2022" },
  ];
  const handleSubmit = () => {};
  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
