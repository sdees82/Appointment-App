import React from 'react';
import './mainContainer.css';
import Dashboard from '../dashboard/dashboard';
import Messages from '../messages/messages';
import Payment from '../payment/payment';
import Inbox from '../inbox/inbox';

const MainContainer = ({routes, appointments}) =>{
    return(
        <div className="mainContainer">
        { routes === "dashboard"?
            <Dashboard appointments={appointments}/>:
            <Payment/>
        }
        </div>
    );
}

export default MainContainer;