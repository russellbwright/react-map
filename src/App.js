import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map';
import Side from './components/SideBar/Side';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Side />
        <Map />
        
      </div>
    );
  }
}

export default App;
