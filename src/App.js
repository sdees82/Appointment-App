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
      appointments: [{
        doctor: "Dr Anthony Wagner",
        specialty: "Dermatologist",
        address1: "1268 High St apt #2",
        address2: "Windsor, ON",
        appDate: "6/24/2018",
        appTime: "2:30pm",
      }]
    }
  }

handleChangeDoctor = (e) =>{
  this.setState({...this.state.appointments.doctor, doctor: e.target.value});
}

handleChangeDate = (e) =>{
  this.setState({...this.state.appointments.appDate, appDate: e.target.value});
}

handleChangeTime = (e) =>{
  this.setState({...this.state.appointments.appTime, appTime: e.target.value});
}

  bookAppointment = (e) =>{
    e.preventDefault();
    const newApp = {
      doctor: this.state.doctor,
      appDate: this.state.appDate,
      appTime: this.state.appTime
    };

    this.setState(prevState => ({
      appointments: [...prevState.appointments, newApp]
  }));
    this.setState({ open: false });
}

cancelAppointment = (e) =>{
  let newState = [...this.state.appointments];
    delete newState[e];
    this.setState({appointments: newState});
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
    const {open, greeting, appointments} = this.state;
   
    return (
      <div className="App">
      <Appointment open={open} greeting={greeting} onCloseModal={this.onCloseModal} onOpenModal={this.onOpenModal} bookAppointment={this.bookAppointment} handleChangeDoctor={this.handleChangeDoctor} handleChangeDate={this.handleChangeDate} handleChangeTime={this.handleChangeTime}/>
       <Sidebar changeRoute={this.changeRoute}/>
       <MainContainer appointments={appointments} cancelAppointment={this.cancelAppointment} routes={this.state.routes}/>
      </div>
    );
  }
}

export default App;
