import React, { Component } from 'react'
import Movie from './Movie';

export default class Movies extends Component {

  render() {
    return (
      <>
        {this.props.movies.map((movie, idx) => <Movie movie={movie} idx={idx}/>)}
      </>
    )
  }
}
