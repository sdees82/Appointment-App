import React from 'react';
import './calendar.css';

const Calendar = () =>{
    return(
        <div className="calendar">
            <div className="calendarContainer">

                <div className="calendarMonth">
                    <img src=""/>
                    <span>April 2018</span>
                    <img src=""/>
                </div>
                <div className="calendarDay">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
                </div>
            </div>
        </div>

    );
}

export default Calendar;