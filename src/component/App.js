import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: ' ',
    sunset: ' ',
    temperature: ' ',
    pressure: ' ',
    wind: ' ',
    icon: ' ',
    description: ' ',
    error: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleFindClick = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=a9d859ae3b80fbcd7fa5b0c20002adf5&units=metric`
    const date = new Date().toLocaleString();
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error('Can not find that city')
      }).then(response => response.json())
      .then(data =>
        this.setState({
          date: date,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temperature: data.main.temp.toFixed(0),
          pressure: data.main.pressure,
          wind: data.wind.speed,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          error: false,
        }))

      .catch(error => {
        this.setState({
          error: true,
          city: this.state.value,
        })
      })
  }



  render() {
    return (
      <>
        <h1>Weather Forecast</h1>
        <Form click={this.handleFindClick} change={this.handleInputChange} value={this.state.value} />
        <Result weather={this.state} />

      </>
    );
  }
}

export default App;
