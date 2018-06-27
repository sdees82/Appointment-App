import React from 'react';
import New from '../../images/new.png';
import Dashboard from '../../images/dashboard.png';
import Folder from '../../images/folder.png';
import Chart from '../../images/chart.png';
import Chat from '../../images/chat.png';
import Calendar from '../../images/calendar.png';
import Payment from '../../images/payment.png';
import Email from '../../images/email.png';
import './sidebar.css';


const Sidebar = ({changeRoute}) =>{
    return(
        <div className="sidebar">
            {/* <button onClick={changeRoute} id="newClient" className="categories"><img className="icons" src={New} alt="new icon" /></button> */}
            <button onClick={changeRoute} id="dashboard" className="categories"><img className="icons" src={Dashboard} alt="Dashboard icon" /></button>
            {/* <button onClick={changeRoute} id="folder" className="categories"><img className="icons" src={Folder} alt="Folder icon" /></button> */}
            {/* <button onClick={changeRoute} id="chart" className="categories"><img className="icons" src={Chart} alt="Chart icon" /></button> */}
            {/* <button onClick={changeRoute} id="chat" className="categories"><img className="icons" src={Chat} alt="Chat icon" /></button> */}
            {/* <button onClick={changeRoute} id="calendar" className="categories"><img className="icons" src={Calendar} alt="calendar icon" /></button> */}
            <button onClick={changeRoute} id="payment" className="categories"><img className="icons" src={Payment} alt="Payment icon" /></button>
            {/* <button onClick={changeRoute} id="message" className="categories"><img className="icons" src={Email} alt="Email icon" /></button> */}
        </div>

    );
}

export default Sidebar;