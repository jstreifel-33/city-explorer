import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'

export default class Movie extends Component {
  render() {
    let {movie, idx} = this.props;
    return (
        <Col key={idx} md={3}>
          <Card>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Body>
              <Card.Img src={movie.posterUrl} alt="Error loading image :("></Card.Img>
              <Card.Text style={{height:"100px", overflow:"scroll", borderBottom:"thin solid black"}}>{movie.description}</Card.Text>
              <Card.Subtitle>Released: {movie.release}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
    )
  }
}
