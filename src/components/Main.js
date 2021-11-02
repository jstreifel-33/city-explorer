import React, { Component } from 'react'
import SearchForm from './SearchForm'
import DispResults from './DispResults'
import { Container } from 'react-bootstrap'

export default class Main extends Component {
  render() {
    return (
      <>
        <Container className="main">
          <SearchForm queryLocation={this.props.queryLocation} getMap={this.props.getMap} latLon={this.props.latLon} />
        </Container>
        <Container>
          {this.props.showResults &&
            <DispResults location={this.props.location} mapUrl={this.props.mapUrl} show={this.props.showResults} latLon={this.props.latLon} />
          }
        </Container>
      </>
    )
  }
}
