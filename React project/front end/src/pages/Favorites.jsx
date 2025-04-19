function Favorite() {
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites, and they will appear here.</p>

      {/* Optional: Add an icon or button for better UX */}
      <div className="favorites-empty-icon">❤️</div>

      {/* Optional: Link to browse movies */}
      <button
        className="browse-button"
        onClick={() => {
          /* Navigate to movies page */
        }}>
        Browse Movies
      </button>
    </div>
  );
}

export default Favorite;
