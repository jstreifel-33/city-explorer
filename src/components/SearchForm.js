import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import ErrorAlert from './ErrorAlert'

export default class SearchForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showError: false,
      error: {}
    }
  }

  handleError = (e) => {
    console.log(e.response);
    if (e.status) {
      this.setState({
        showError: true,
        error: {
          code: e.response.status,
          message: e.response.data.error
        }
      });
    } else {
      this.setState({
        showError: true,
        error: {
          code: 404,
          message: 'Additional information server not detected!',
        },
      })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.queryLocation(e.target.term.value);
    } catch (e) {
      this.handleError(e);
    }
    try {
      await this.props.queryWeather(this.props.latLon[0], this.props.latLon[1]);
    } catch (e) {
      this.handleError(e);
    }
    e.target.term.value = '';
  }

  hideAlert = (boolean) => {
    this.setState({
      showError: boolean
    })
  }

  render() {
    return (
      <>
        <ErrorAlert
          show={this.state.showError}
          error={this.state.error}
          hideAlert={this.hideAlert}
        />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-1">
            <Form.Label>Search for a city to see more details!</Form.Label>
            <Form.Control name="term" type="text" placeholder="Enter a location" />
          </Form.Group>
          <Button variant="primary" type="submit">Explore!</Button>
        </Form>
      </>
    )
  }
}
