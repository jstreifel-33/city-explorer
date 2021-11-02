import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class SearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.queryLocation(e.target.term.value);
    console.log(e.target.term.value);
    e.target.term.value = ''
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-1">
          <Form.Label>Search for a city</Form.Label>
          <Form.Control name="term" type="text" placeholder="Enter a location"/>
        </Form.Group>
        <Button variant="primary" type="submit">Explore!</Button>
      </Form>
    )
  }
}
