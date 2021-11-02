import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>City Explorer</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    )
  }
}
