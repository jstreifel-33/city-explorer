import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

export default class DispResults extends Component {
  render() {
    //if (this.props.show) {
    return (
        <Card className="md-6" style={{ marginTop: "10px" }}>
          <Card.Img src={this.props.mapUrl} />
          <Card.Body>
            <Card.Title>Location: {this.props.location.display_name}</Card.Title>
            <Card.Text>Latitude: {this.props.location.lat}<br/>Longitude: {this.props.location.lon}</Card.Text>
          </Card.Body>
        </Card>
    )
    //}
  }
}
