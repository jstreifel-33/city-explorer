import React, { Component } from 'react'
import SearchForm from './SearchForm'
import DispResults from './DispResults'
import { Container } from 'react-bootstrap'

export default class Main extends Component {
  render() {
    return (
      <Container className="main">
        <SearchForm queryLocation={this.props.queryLocation}/>
        <DispResults location={this.props.location} show={this.props.showResults}/>
      </Container>
    )
  }
}
