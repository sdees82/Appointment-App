import React from 'react';
import './canceled.css';

const Canceled = () =>{
    return(
        <div className="canceled">
              <div className="canceledContainer">
            <div className="canceledHeader">
                <h3>Canceled visits</h3>
                <p className="dots">...</p>
            </div>
            <p>You have one canceled visit:</p>
           <p>Mark Newton - Cardiologist</p>
           <div className="canceledDate">
            <img src=""/>
            <p>20/07/2018</p>
        </div>
        </div>
        </div>
    );
}

export default Canceled;