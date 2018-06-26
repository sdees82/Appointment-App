import React from 'react';
import './appList.css';
import Cards from '../cards/cards';

const AppList = ({appointments, cancelAppointment})=>{
return(
    <div className="appList">
{
    appointments.map((val, index)=>{
        { if(val !== undefined){
            return (
                <Cards
                key={index}
                doctor={appointments[index].doctor}
                specialty={appointments[index].specialty}
                address1={appointments[index].address1}
                appDate={appointments[index].appDate}
                appTime={appointments[index].appTime}
                cancelAppointment={cancelAppointment.bind(this, index)}
                />  
            );
        }
    }
    })
}
    </div>
);
}

export default AppList;