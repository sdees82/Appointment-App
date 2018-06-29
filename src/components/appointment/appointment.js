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
                    <option defaultValue>Dr Winger Michael</option>
                    <option>Dr. Stephanie Satz</option>
                    <option>Dr Zaher Amjad</option>
                    <option>Dr. Charles McFarlane</option>
                </select>

                <h4>Select a date</h4>
                <select id=" appDate" onChange={handleChangeDate}>
                    <option>Select a date</option>
                    <option>6/28/2018</option>
                    <option>6/29/2018</option>
                    <option>6/30/2018</option>
                    <option>7/1/2018</option>
                    <option>7/2/2018</option>
                    <option>7/3/2018</option>
                    <option>7/4/2018</option>
                    <option>7/5/2018</option>
                    <option>7/6/2018</option>
                </select>

                <h4>Select a time</h4>
                <select id=" appTime" onChange={handleChangeTime}>
                    <option>Select a time</option>
                    <option>8:30am</option>
                    <option>9:30am</option>
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
            {/* <select>
                <option selected>Sean Dees</option>
                <option>Jeff Green</option>
                <option>Jane Mansfield</option>
            </select> */}
            </div>
         </div>
    );
}

export default Appointment;