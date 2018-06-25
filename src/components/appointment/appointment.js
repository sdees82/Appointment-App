import React from 'react';
import Modal from 'react-responsive-modal';
import './appointment.css';
import Me from '../../images/me.jpg'

const Appointment = ({open, onCloseModal, onOpenModal, bookAppointment, handleChangeDoctor, handleChangeDate, handleChangeTime, greeting}) =>{
    return(
        <div className="makeAppointment">
            <button onClick={onOpenModal} className="makeAppointmentButton">Make an appointment</button>
            { greeting === false?
            <Modal  open={open} onClose={onCloseModal} center>
            <div className="modalWindow">
                <h4>Select a Doctor</h4>
                <select id=" doctor" onChange={handleChangeDoctor}>
                    <option>Select a Doctor</option>
                    <option defaultValue>Dr. Anthony Wagner</option>
                    <option>Dr. Mark Newton</option>
                    <option>Dr. Sarah Kelly</option>
                </select>

                <h4>Select a date</h4>
                <select id=" appDate" onChange={handleChangeDate}>
                    <option>Select a date</option>
                    <option>6/22/2018</option>
                    <option>6/23/2018</option>
                </select>

                <h4>Select a time</h4>
                <select id=" appTime" onChange={handleChangeTime}>
                    <option>Select a time</option>
                    <option>8am</option>
                    <option>9am</option>
                </select>

                <button onClick={bookAppointment}>Book Appointment</button>
                </div>
            </Modal>:
            <div>
                <h1>Thank You</h1>
                <p>Your apointment is set</p>
            </div>
            }
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