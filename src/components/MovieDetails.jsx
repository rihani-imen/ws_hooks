import { useParams, useNavigate } from "react-router-dom";

import { moviesData } from "../moviesData";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find(m => m.id === Number(id));

  if (!movie) return <p>Film non trouvé</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div style={{ margin: "20px auto", maxWidth: "560px" }}>
        <iframe
          width="100%"
          height="315"
          src={movie.trailer}
          title="trailer"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={() => navigate("/")}>⬅ Retour</button>
    </div>
  );
}

export default MovieDetails;
