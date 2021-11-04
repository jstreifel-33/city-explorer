import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap';

export default class Movies extends Component {

  mapMovies = (movieArr) => {
    return (movieArr.map((movie, idx) => {
      return (
        <Col md={3}>
          <Card key={idx}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Body>
              <Card.Img src={movie.posterUrl} alt="Error loading image :("></Card.Img>
              <Card.Text style={{height:"100px", overflow:"scroll", borderBottom:"thin solid black"}}>{movie.description}</Card.Text>
              <Card.Subtitle>Released: {movie.release}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    )
    )
  }

  render() {
    return (
      <>
        {this.mapMovies(this.props.movies)}
      </>
    )
  }
}
