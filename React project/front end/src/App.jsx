import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard
        movie={{ title: "Atik's Movie", release_date: "2025" }}></MovieCard>
    </>
  );
}

export default App;
