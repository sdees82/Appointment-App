import React from 'react';
import './mainContainer.css';
import Dashboard from '../dashboard/dashboard';
// import Messages from '../messages/messages';
import Payment from '../payment/payment';
// import Inbox from '../inbox/inbox';

const MainContainer = ({locations,routes, appointments, cancelAppointment, canAppList, clearApp, today, clearAlert}) =>{
    return(
        <div className="mainContainer">
        { routes === "dashboard"?
            <Dashboard locations={locations} today={today} appointments={appointments} canAppList={canAppList} cancelAppointment={cancelAppointment} clearApp={clearApp} clearAlert={clearAlert}/>:
            <Payment/>
        }
        </div>
    );
}

export default MainContainer;