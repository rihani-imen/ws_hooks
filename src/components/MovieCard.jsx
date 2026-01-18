import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center", width: "200px" }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating} ⭐</p>
      <Link to={`/movie/${movie.id}`}>
        <button>Voir détails</button>
      </Link>
    </div>
  );
}

export default MovieCard;
