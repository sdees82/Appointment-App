import React from 'react';
import './alert.css';


const Alert = () =>{
    return(
        <div className="alert">
        <div className="alertContainer">
            <div className="alertHeader">
                <h4>Alert</h4>
                <p>...</p>
            </div>
            <p>You have 2 visits today:</p>
            <ul>
                <li>Dr Anthony Wagner <span>Dermatologist</span></li>
                <li>Dr Anthony Wagner <span>Dentist</span></li>
            </ul>
        </div>
        </div>
    );
}

export default Alert;