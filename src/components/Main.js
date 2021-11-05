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
          setShow={this.props.setShow}
          location={this.props.location}
        />

        {this.props.showResults &&
          <>

            <Row>
              <Col md={8}>
                <DispResults
                  location={this.props.location}
                  mapUrl={this.props.mapUrl}
                  show={this.props.showResults}
                />
              </Col>
              <Col md={4}>
                <h2 style={{ marin: "auto", marginTop: "20px" }}>Location Weather</h2>
                <Weather weatherData={this.props.weatherData} />
              </Col>
            </Row>

            <h2>Movies Related to Location</h2>
            <Row md="auto">
              <Movies movies={this.props.movies} />
            </Row>

          </>
        }

      </Container>

    )
  }
}
