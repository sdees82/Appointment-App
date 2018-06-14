import React, { Component } from 'react';
import './App.css';
import Appointment from './components/appointment/appointment';
import Sidebar from './components/sidebar/sidebar';
import MainContainer from './components/mainContainer/mainContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      routes: "dashboard"
    }
  }

  changeRoute = (e) =>{
    this.setState({...this.state.routes, routes: e.currentTarget.id});
  }

  render() {
    return (
      <div className="App">
      <Appointment/>
       <Sidebar changeRoute={this.changeRoute}/>
       <MainContainer routes={this.state.routes}/>
      </div>
    );
  }
}

export default App;
