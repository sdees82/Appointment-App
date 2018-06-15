import React from 'react';
import './payment.css';
import Mastercard from '../../images/mastercard.png';

const Payment =()=>{
    return(
        <div className="payment"> 
        <h1>ADD CARD TO FILE</h1>
        <div className="container">
            <header className="cardTop">
                <img className="mastercard" src={Mastercard} alt="mastercard logo"/>
            <div className="details">
                <p>PAYMENT</p>
                <p>DETAILS</p>
            </div>
            </header>
            <div className="cardBottom">
                <form>
                    <input className="name" type="text" placeholder="LEBRON JAMES"/>
                    <div className="cardNumber">
                        <input className="number" type="text" placeholder="XXXX XXXX XXXX XXXX"/>
                        <input className="expiration" type="text" placeholder="MONTH | YEAR"/>
                    </div>
                    <div className="ccvContainer">
                    <input className="ccv" type="text" placeholder="343"/>
                    <button>ENTER</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Payment;