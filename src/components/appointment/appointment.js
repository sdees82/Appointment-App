import React from 'react';
import './appointment.css';

const Appointment = () =>{
    return(
        <div className="makeAppointment">
            <button className="makeAppointmentButton">Make an appointment</button>

            <div className="profileContainer">
            <div className="profilePic"/>
            <p>Marie Waters</p>
            </div>
         </div>
    );
}

export default Appointment;