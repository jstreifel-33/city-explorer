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
      mapUrl: '',
      showResults: false,
      weather: [],
      movies: []
    }
  }

  queryLocation = async (term) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${term}&format=json`;
    let queryResults = await axios.get(url);
    let locData = queryResults.data[0];

    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${locData.lat},${locData.lon}&zoom=11&size=1000x1000&format=png&maptype=roadmap&markers=icon:small-red-cutout|${locData.lat},${locData.lon}`;

    this.setState({
      location: locData,
      showResults: true,
      mapUrl: mapUrl
    });
  }

  queryWeather = async () =>{
    let loc = this.state.location;
    let results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?name=${loc.display_name}&lat=${loc.lat}&lon=${loc.lon}`);
    this.setState({
      weather: results.data
    })
  }

  queryMovieRef = async () => {
    let place = this.state.location.display_name;
    let city = place.split(',')[0];
    let results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies?name=${city}`)
    this.setState({
      movies: results.data
    })
  }

  setShow = (boolean) => this.setState({showResults: boolean})

  render() {
    return (
      <div>
        <Header/>
        <Main 
          queryLocation={this.queryLocation} 
          queryWeather={this.queryWeather}
          queryMovieRef={this.queryMovieRef}
          setShow={this.setShow}
          location={this.state.location} 
          mapUrl = {this.state.mapUrl}
          weatherData={this.state.weather}
          movies={this.state.movies}
          showResults={this.state.showResults}
          />
        <Footer/>
      </div>
    )
  }
}
