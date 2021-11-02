import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class DispResults extends Component {
  render() {
    //if (this.props.show) {
      return (
        <Card className="md-3">
          <Card.Body>
            <Card.Text>Location: {this.props.location.display_name}</Card.Text>
            <Card.Text>Latitude: {this.props.location.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.location.lon}</Card.Text>
          </Card.Body>
        </Card>
      )
    //}
  }
}
