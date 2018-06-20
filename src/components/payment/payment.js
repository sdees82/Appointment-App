import React from 'react';
import './payment.css';
import Mastercard from '../../images/mastercard.png';

class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            submitted: "false"
        }
    }

    addCard = (e) =>{
        e.preventDefault();
        alert("clicked!");
        this.setState({submitted: "true"});
        console.log(this.state.submitted);
    } 
 
    render(){
        const {submitted} = this.state;

        if(this.state.submitted === " false"){
            return(
                <div className="payment"> 
                <h1>Thank You</h1>
                <p>Your card has been added</p>
            </div>
            );
           
        }else{
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
                            <button onClick={this.addCard}>ENTER</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            );   
           
        }
       
    }
}

export default Payment;