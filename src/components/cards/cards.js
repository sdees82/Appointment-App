import React from 'react';
import './cards.css';
import Location from '../../images/location.png';
import CalendarSmall from '../../images/calendarSmall.png';
import Clock from '../../images/clock.png';
import Doctor from '../../images/md.jpg';

const Cards = ({doctor, specialty, appDate, appTime, cancelAppointment}) =>{
    return(
            <main className="cards">
                <div className="container">
                <header className="cardsHeader">
                <img className="profilePic" src={Doctor}/>
                <div className="profileTitle">
                    <p>{doctor}</p>
                    <p>{specialty}</p>
                </div>  
                </header>

                {/* <section className="profileDetails">
                    <div className="location"><img src={Location} alt="location icon"/>
                    <p>{address1}</p></div>
                    <p>{address2}</p>
                </section> */}

                <section className="profileDate">
                <div className="profileleft">
                <img src={CalendarSmall}/><span>{appDate}</span>
                </div>
                <div className="profileRight">
                <img src={Clock}/><span>{appTime}</span>
                </div>
                </section>

                <section className="profileButtons">
                    {/* <button className=" button confirm"><p></p></button> */}
                    <button onClick={cancelAppointment} className=" button cancel"><p></p></button>
                </section>
                </div>
            </main>
            
    );
}

export default Cards;