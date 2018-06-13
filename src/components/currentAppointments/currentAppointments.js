import React from 'react';
import './currentAppointments.css';
import Cards from '../cards/cards';

const CurrentAppointments = () =>{
    return (
        <main className="currentAppointments">
            <div className="container">
                <header class="header">
                    <h3>Appointments</h3>
                    <p className="dots">...</p>
                </header>
                
                <section className="buttonContainer">
                    <div className="sectionLeft">
                        <button className="button1">Upcoming</button>
                        <button className="button2">Past</button>
                    </div>
                    <div className="sectionMiddle">
                        <button className="arrowButton arrowBack"/>
                        <button className="arrowButton arrowForward"/>
                    </div>
                    <div className="sectionRight">
                        <span>Sort By: <strong>Date</strong></span>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </section>
                <section className="cardsContainer">
                <Cards/>
                <Cards/>
                <Cards/>
            </section>
            </div>
        </main>
    );
}

export default CurrentAppointments;