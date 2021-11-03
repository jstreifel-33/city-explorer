import React, { Component } from 'react'
import SearchForm from './SearchForm'
import DispResults from './DispResults'
import { Container } from 'react-bootstrap'
import Weather from './Weather'

export default class Main extends Component {
  render() {
    return (
      <>
        <Container className="main">

          <SearchForm 
            queryLocation={this.props.queryLocation} 
            queryWeather={this.props.queryWeather}
            getMap={this.props.getMap} 
            latLon={this.props.latLon} 
          />

          {this.props.showResults &&
            <DispResults 
              location={this.props.location} 
              mapUrl={this.props.mapUrl} 
              show={this.props.showResults} 
              latLon={this.props.latLon} 
            />
          }

          <Weather weatherData={this.props.weatherData}/>

        </Container>
      </>
    )
  }
}
