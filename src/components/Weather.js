import React, { Component } from 'react'
import { CardGroup, Card } from 'react-bootstrap'

export default class Weather extends Component {

  forecast = (data) => {
    return(
    data.map((day, idx) => {
      return (
        <Card key={idx}>
          <Card.Title>{day.date}</Card.Title>
          <Card.Text>{day.description}</Card.Text>
        </Card>
      )
    }))
  }

  render() {
    return (
      <>
        <h2 style={{ marin: "auto", marginTop: "20px" }}>Location Weather</h2>
        <CardGroup >
          {this.forecast(this.props.weatherData)}
        </CardGroup>
      </>
    )
  }
}
