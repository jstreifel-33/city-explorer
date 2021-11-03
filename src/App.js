import React, { Component } from 'react'
import axios from 'axios'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: {},
      locationLatLon: [],
      mapUrl: '',
      showResults: false,
      weather: []
    }
  }

  queryLocation = async (term) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${term}&format=json`;
    let queryResults = await axios.get(url);
    let locData = queryResults.data[0];
    let latLon = [locData.lat, locData.lon];

    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${latLon[0]},${latLon[1]}&zoom=11&size=1000x1000&format=png&maptype=roadmap&markers=icon:small-red-cutout|${latLon[0]},${latLon[1]}`;

    this.setState({
      location: locData, 
      locationLatLon: latLon, 
      showResults: true,
      mapUrl: mapUrl
    });
  }

  queryWeather = async (lat, lon) =>{
    let loc = this.state.location;
    let results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?name=${loc.display_name}&lat=${loc.lat}&lon=${loc.lon}`);
    this.setState({
      weather: results.data
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <Main 
          queryLocation={this.queryLocation} 
          queryWeather={this.queryWeather}
          location={this.state.location} 
          mapUrl = {this.state.mapUrl}
          weatherData={this.state.weather}
          latLon={this.state.locationLatLon}
          showResults={this.state.showResults}
          />
        <Footer/>
      </div>
    )
  }
}
