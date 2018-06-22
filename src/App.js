import React, { Component } from 'react';
import './App.css';
import Appointment from './components/appointment/appointment';
import Sidebar from './components/sidebar/sidebar';
import MainContainer from './components/mainContainer/mainContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      routes: "dashboard",
      open: false,
      doctor:"",
      appDate:"",
      appTime: "",
      greeting: false,
      appointmentCards: ""
    };
  }

handleChangeDoctor = (e) =>{
  this.setState({...this.state.doctor, doctor: e.currentTarget.value});
}

handleChangeDate = (e) =>{
  this.setState({...this.state.appDate, doctor: e.currentTarget.value});
}

handleChangeTime = (e) =>{
  this.setState({...this.state.appTime, doctor: e.currentTarget.value});
}

  bookAppointment = (e) =>{
    e.preventDefault();
    console.log("Appointment booked");
    this.setState({ greeting: true });
}
  onOpenModal = () =>{
    this.setState({ open: true });
    console.log("clicked");
  }

  onCloseModal = () =>{
    this.setState({ open: false });
  }
  changeRoute = (e) =>{
    this.setState({...this.state.routes, routes: e.currentTarget.id});
  }

  render() {
    const {open, greeting} = this.state;
    return (
      <div className="App">
      <Appointment open={open} greeting={greeting} onCloseModal={this.onCloseModal} onOpenModal={this.onOpenModal} bookAppointment={this.bookAppointment} handleChangeDoctor={this.handleChangeDoctor} handleChangeDate={this.handleChangeDate} handleChangeTime={this.handleChangeTime}/>
       <Sidebar changeRoute={this.changeRoute}/>
       <MainContainer routes={this.state.routes}/>
      </div>
    );
  }
}

export default App;
