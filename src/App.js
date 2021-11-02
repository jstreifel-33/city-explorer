import React, { Component } from 'react'
import axios from 'axios'
import Main from './components/Main';
import Header from './components/Header';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: {},
      showResults: false,
    }
  }

  queryLocation = async (term) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${term}&format=json`;
    let queryResults = await axios.get(url);
    let locData = queryResults.data[0];
    console.log(locData);
    this.setState({location: locData});
  }

  render() {
    return (
      <div>
        <Header/>
        <Main queryLocation={this.queryLocation} location={this.state.location} showResults={this.state.showResults}/>
      </div>
    )
  }
}
