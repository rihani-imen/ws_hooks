import React from "react";

import { Form, Row, Col } from "react-bootstrap";

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <Form style={{ margin: "20px 0" }}>
      <Row>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Filtrer par titre"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="number"
            placeholder="Filtrer par note"
            min="0"
            max="5"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default Filter;
