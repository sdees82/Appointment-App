import React from 'react';
import './mainContainer.css';
import Alert from '../alert/alert';
import Canceled from '../canceled/canceled';
import Calendar from '../calendar/calendar';
import SearchDoctor from '../searchDoctor/searchDoctor';
import CurrentAppointments from '../currentAppointments/currentAppointments';

const MainContainer = () =>{
    return(
        <div className="mainContainer">
        <div className="containerLeft">
            <Calendar/>
            <Alert/>
            <Canceled/>
        </div>
        <div className="containerRight">
            <SearchDoctor/>
            <CurrentAppointments/>
        </div>
        </div>
    );
}

export default MainContainer;