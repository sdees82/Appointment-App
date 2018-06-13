import React from 'react';
import './calendar.css';
import Back from '../../images/back.png';
import Forward from '../../images/forward.png';

const Calendar = () =>{
    return(
        <div className="calendar">
            <div className="calendarContainer">

                <div className="calendarMonth">
                    <img src={Back}/>
                    <span>April 2018</span>
                    <img src={Forward}/>
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
                <div className="weekDay">
                    
                        <span class="previousMonth">28</span>
                        <span class="previousMonth">29</span>
                        <span class="previousMonth">30</span>
                        <span class="previousMonth">31</span>
                        <span>1</span>
                        <span>2</span>
                        <span className="endDay">3</span>
                
                    
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span className="endDay">10</span>
            
                
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span className="endDay">17</span>
            
            
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span className="endDay">24</span>
    
        
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span>
        <span>30</span>
        <span className="endDay">1</span>
                </div>
            </div>
        </div>

    );
}

export default Calendar;