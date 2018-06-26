import React from 'react';
import './dashboard.css';
import Alert from '../alert/alert';
import Canceled from '../canceled/canceled';
import Calendar from 'react-calendar';
import '../calendar/calendar.css';
import SearchDoctor from '../searchDoctor/searchDoctor';
import CurrentAppointments from '../currentAppointments/currentAppointments';

const Dashboard = ({appointments, cancelAppointment, canAppList, clearApp}) =>{
    return(
        <div className="dashboard">
                <div className="containerLeft">
                    <Calendar/>
                    <Alert/>
                    <Canceled canAppList={canAppList} clearApp={clearApp}/>
                </div>
             <div className="containerRight">
                    <SearchDoctor/>
                    <CurrentAppointments appointments={appointments} canAppList={canAppList} cancelAppointment={cancelAppointment}/>
                </div>
            </div>
    );
}

export default Dashboard;