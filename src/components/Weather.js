import React, { Component } from 'react'
import WeatherDay from './WeatherDay'

export default class Weather extends Component {

  render() {
    return (
      <>
        <h2 style={{ marin: "auto", marginTop: "20px" }}>Location Weather</h2>
        {this.props.weatherData.map((day, idx) => <WeatherDay day={day} idx={idx} />)}
      </>
    )
  }
}
