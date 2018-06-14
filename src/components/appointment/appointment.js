import React from 'react';
import './appointment.css';
import Me from '../../images/me.jpg'

const Appointment = () =>{
    return(
        <div className="makeAppointment">
            <button className="makeAppointmentButton">Make an appointment</button>

            <div className="profileContainer">
            <div className="profilePic">
                <img src={Me}/>
            </div>
            <select>
                <option selected>Sean Dees</option>
                <option>Jeff Green</option>
                <option>Jane Mansfield</option>
            </select>
            </div>
         </div>
    );
}

export default Appointment;