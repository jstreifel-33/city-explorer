import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <footer style = {{margin:"auto", marginTop:"20px", textAlign:"center"}}>
        <p>Maintained by Joseph Streifel | Visit me on <a href="https://github.com/jstreifel-33/city-explorer">GitHub</a>!</p>
      </footer>
    )
  }
}
