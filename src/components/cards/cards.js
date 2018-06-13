import React from 'react';
import './cards.css';
import Location from '../../images/location.png'

const Cards = () =>{
    return(
            <main className="cards">
                <div className="container">
                <header className="cardsHeader">
                <div className="profilePic"/>
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

                </section>

                <section className="profileButtons">
                    <button className=" button confirm"><p></p>Confirm</button>
                    <button className=" button cancel"><i></i>Cancel</button>
                </section>
                </div>
            </main>
    );
}

export default Cards;