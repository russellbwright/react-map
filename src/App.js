import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Maps from './components/Map/Maps';
import Side from './components/SideBar/Side';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Side />
        <Maps />
        
      </div>
    );
  }
}

export default App;
