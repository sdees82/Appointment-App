import React from 'react';
import Cards from '../cards/cards';

const AppList = ({appointments})=>{
return(
    <div className="appList">
{
    appointments.map((val, index)=>{
        return (
            <Cards
            key={index}
            doctor={appointments[index].doctor}
            specialty={appointments[index].specialty}
            address1={appointments[index].address1}
            appDate={appointments[index].appDate}
            appTime={appointments[index].appTime}
            />
        );
    })
}
    </div>
);
}

export default AppList;