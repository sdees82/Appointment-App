import React, { Component } from 'react';
import './App.css';
import Appointment from './components/appointment/appointment';
import Sidebar from './components/sidebar/sidebar';
import Alert from './components/alert/alert';
import Canceled from './components/canceled/canceled';
import Calendar from './components/calendar/calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Appointment/>
       <Sidebar/>
       <Calendar/>
       <Alert/>
       <Canceled/>
      </div>
    );
  }
}

export default App;
