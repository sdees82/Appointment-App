import React, { Component } from 'react';
import './App.css';
import Appointment from './components/appointment/appointment';
import Sidebar from './components/sidebar/sidebar';
import MainContainer from './components/mainContainer/mainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Appointment/>
       <Sidebar/>
       <MainContainer/>
      </div>
    );
  }
}

export default App;
