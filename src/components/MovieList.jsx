import React from "react";

import { Row, Col } from "react-bootstrap";

import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={4} sm={6}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
