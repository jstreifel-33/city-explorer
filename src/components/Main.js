import React, { Component } from 'react'
import SearchForm from './SearchForm'
import DispResults from './DispResults'
import { Container, Row, Col } from 'react-bootstrap'
import Weather from './Weather'
import Movies from './Movies'

export default class Main extends Component {
  render() {
    return (

      <Container className="main">

        <SearchForm
          queryLocation={this.props.queryLocation}
          queryWeather={this.props.queryWeather}
          queryMovieRef={this.props.queryMovieRef}
          location={this.props.location}
          getMap={this.props.getMap}
          latLon={this.props.latLon}
        />
        <Row>
          <Col md={8}>
            {this.props.showResults &&
              <DispResults
                location={this.props.location}
                mapUrl={this.props.mapUrl}
                show={this.props.showResults}
                latLon={this.props.latLon}
              />
            }
          </Col>
          <Col md={4}>
            <Weather weatherData={this.props.weatherData} />
          </Col>
        </Row>
      
        <h2>Movies Related to Location</h2>
        <Row md="auto">
          <Movies movies={this.props.movies} />
        </Row>

      </Container>

    )
  }
}
