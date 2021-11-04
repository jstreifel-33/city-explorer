import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'

export default class Weather extends Component {

  forecast = (data) => {
    return(
    data.map((day, idx) => {
      return (
        <Accordion key={idx}>
          <Accordion.Item eventKey="idx">
            <Accordion.Header><img style={{height:"50px"}} src={`/weatherIcons/${day.icon}.png`} alt="whoo"/>&#160;&#160;{day.date}</Accordion.Header>
            <Accordion.Body>High of {day.highTemp}&#176;F<br/>Low of {day.lowTemp}&#176;F<br/>{day.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        // <Card key={idx}>
        //   <Card.Title>{day.date}</Card.Title>
        //   <Card.Text>High of {day.highTemp}&#176;F<br/>Low of {day.lowTemp}&#176;F<br/>{day.description}</Card.Text>
        // </Card>
      )
    }))
  }

  render() {
    return (
      <>
        <h2 style={{ marin: "auto", marginTop: "20px" }}>Location Weather</h2>
          {this.forecast(this.props.weatherData)}
      </>
    )
  }
}
