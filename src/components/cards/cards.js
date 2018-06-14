import React from 'react';
import './cards.css';
import Location from '../../images/location.png';
import CalendarSmall from '../../images/calendarSmall.png';
import Clock from '../../images/clock.png';
import Doctor from '../../images/doctor1.jpg';

const Cards = () =>{
    return(
            <main className="cards">
                <div className="container">
                <header className="cardsHeader">
                <img className="profilePic" src={Doctor}/>
                <div className="profileTitle">
                    <p>Dr Anthony Wagner</p>
                    <p>Dermatologist</p>
                </div>  
                </header>

                <section className="profileDetails">
                    <div className="location"><img src={Location} alt="location icon"/>
                    <p>Grand Medical Centre,</p></div>
                    <p>58 Oxford St, London</p>
                </section>

                <section className="profileDate">
                <div className="profileleft">
                <img src={CalendarSmall}/><span>14/06/2018</span>
                </div>
                <div className="profileRight">
                <img src={Clock}/><span>2:30PM</span>
                </div>
                </section>

                <section className="profileButtons">
                    <button className=" button confirm"><p></p></button>
                    <button className=" button cancel"><p></p></button>
                </section>
                </div>
            </main>
    );
}

export default Cards;