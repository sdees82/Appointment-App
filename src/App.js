import React, { Component } from 'react';
import './App.css';
import Appointment from './components/appointment/appointment';
import Sidebar from './components/sidebar/sidebar';
import Alert from './components/alert/alert';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Appointment/>
       <Sidebar/>
       <Alert/>
      </div>
    );
  }
}

export default App;
