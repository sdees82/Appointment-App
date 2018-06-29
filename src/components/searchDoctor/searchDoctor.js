import React from 'react';
import './searchDoctor.css';
import GoogleMaps from "../googleMaps/googleMaps";


const SearchDoctor = () =>{

    return (
        <section className="searchDoctor">
        <GoogleMaps />
            <div className="searchCard">
            <header>
            <span className="googleLetter">A</span>
               <p className="googleDoctor"> Dr. Stephanie Satz</p>
               <span className="googleLetter">B</span>
               <p className="googleDoctor"> Dr. Michael Winger</p>
               <span className="googleLetter">C</span>
               <p className="googleDoctor">Dr. Zaher Amjad</p>
               <span className="googleLetter">D</span>
               <p className="googleDoctor">Dr. Charles McFarlane</p>
                </header>
            </div>
        </section>
    );
}

export default SearchDoctor;