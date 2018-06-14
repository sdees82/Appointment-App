import React from 'react';
import './mainContainer.css';
import Dashboard from '../dashboard/dashboard';

const MainContainer = ({routes}) =>{
    return(
        <div className="mainContainer">
        { routes === "dashboard"?
            <Dashboard/>:
            <h1>Testing</h1>
        }
        </div>
    );
}

export default MainContainer;