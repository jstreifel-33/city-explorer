import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

export default class DispResults extends Component {
  render() {
    //if (this.props.show) {
    return (
      <Col sm={10} md={10} style={{margin:'auto'}}>
        <Card className="md-6" style={{ marginTop: "10px" }}>
          <Card.Img src={this.props.mapUrl} />
          <Card.Body>
            <Card.Text>Location: {this.props.location.display_name}</Card.Text>
            <Card.Text>Latitude: {this.props.location.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.location.lon}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
    //}
  }
}
