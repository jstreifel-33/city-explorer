import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class ErrorAlert extends Component {

  setShow = (boolean) => {
    this.props.hideAlert(boolean);
  }

  render() {
    if (this.props.showError) {
      return (
        <Alert variant="danger" onClose={() => this.setShow(false)} dismissible>
          <Alert.Heading>Oh no! Error code: {this.props.error.code}</Alert.Heading>
          <p>Web request returned error {this.props.error.code}: "{this.props.error.message}"</p>
        </Alert>
      )
    } else {return <></>;}
  }
}
