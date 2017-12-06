import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map';
import Side from './components/SideBar/Side';

class App extends Component {
  render() {
    return (
      <div className="App">
       <p> This is going to be a React App with the use of ESRI's Map API </p>
       <p> I will be using the usgs earthquake data to display recent earthquakes </p>
        <Map />
        <Side />
      </div>
    );
  }
}

export default App;
