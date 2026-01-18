import React from "react";

import { Card } from "react-bootstrap";

import { FaStar } from "react-icons/fa";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>
          {Array(movie.rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} color="gold" />
            ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
