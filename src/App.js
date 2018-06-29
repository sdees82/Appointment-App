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
        doctor: "Dr. Stephanie Satz",
        appDate: "6/30/2018",
        appTime: "9:30am"
      },{
        doctor: "Dr. Zaher Amjad",
        appDate: "7/4/2018",
        appTime: "8:30am"
      },{
        doctor: "Dr. Charles McFarlane",
        appDate: "7/10/2018",
        appTime: "8:30am"}],
      canAppList: [{
        doctor: "",
        appTime: ""
      }],
      today: [{
        doctor: "",
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


// clear today's appointments and cancelled appointments displays
clearApp = () =>{
  let clearVisits = [{
    doctor: "",
    specialty: "",
    appDate: ""
  }];
 this.setState({canAppList: clearVisits});  
}

clearAlert = () =>{
  let clearToday = [{
    doctor: "",
    specialty: "",
  }];
  this.setState({today: clearToday});
}

//Adds appointments to the dashboard
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
    this.todayAlert(newApp);
}

//Add today appointments to alert box
todayAlert = (newApp) =>{
  const previousAlerts = this.state.today[0].doctor !== ""? [...this.state.today] :[];
  const d = new Date();
  const month = d.getMonth();
  const day = d.getDate();
  const year = d.getFullYear();
  const currentDate = `${month + 1}/${day}/${year}`;
  if(newApp.appDate === currentDate){
   previousAlerts.push(newApp);
   this.setState({today: previousAlerts});
  }
}

//removes appointments from the dashboard
cancelAppointment = (e) =>{
  let newState = [...this.state.appointments];
  let alertState = [...this.state.today];

  const {doctor, specialty, appDate} = newState[e];
  const previousAppointments = this.state.canAppList[0].doctor !== ""? [...this.state.canAppList] :[];

  const newAppList = {
    doctor: doctor,
    appDate: appDate
  };
  
  previousAppointments.push(newAppList);

    delete newState[e];
    alertState = {
      doctor: ""
    }
    console.log(alertState);
    this.setState({canAppList: previousAppointments});
    this.setState({appointments: newState});
}

//open book an appointment modal
  onOpenModal = () =>{
    this.setState({ open: true });
    console.log("clicked");
  }

// closes book an appointment modal
  onCloseModal = () =>{
    this.setState({ open: false });
  }
  changeRoute = (e) =>{
    this.setState({...this.state.routes, routes: e.currentTarget.id});
  }

  render() {
    const {open, greeting, appointments, canAppList, today, locations} = this.state;
   
    return (
      <div className="App">
      <Appointment open={open} greeting={greeting} onCloseModal={this.onCloseModal} onOpenModal={this.onOpenModal} bookAppointment={this.bookAppointment} handleChangeDoctor={this.handleChangeDoctor} handleChangeDate={this.handleChangeDate} handleChangeTime={this.handleChangeTime}/>
       <Sidebar changeRoute={this.changeRoute}/>
       <MainContainer today={today} appointments={appointments} canAppList={canAppList} cancelAppointment={this.cancelAppointment} routes={this.state.routes} clearApp={this.clearApp} clearAlert={this.clearAlert} locations={locations}/>
      </div>
    );
  }
}

export default App;
