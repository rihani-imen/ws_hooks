import React, { useState } from "react";

import { Container, Button, Modal, Form } from "react-bootstrap";

import { moviesData } from "./moviesData";

import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const handleAddMovie = () => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    setShowModal(false);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Movie App</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <Button variant="primary" onClick={() => setShowModal(true)}>
        Ajouter un film
      </Button>

      <MovieList movies={filteredMovies} />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.posterURL}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, posterURL: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="5"
                value={newMovie.rating}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, rating: Number(e.target.value) })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
