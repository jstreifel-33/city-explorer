import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'

export default class WeatherDay extends Component {
  render() {
    let { day, idx } = this.props;
    return (
      <Accordion key={idx}>
        <Accordion.Item eventKey={idx}>
          <Accordion.Header><img style={{ height: "50px" }} src={`/weatherIcons/${day.icon}.png`} alt="weather icon" />&#160;&#160;{day.date}</Accordion.Header>
          <Accordion.Body>High of {day.highTemp}&#176;F<br />Low of {day.lowTemp}&#176;F<br />{day.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
