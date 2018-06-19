import React from 'react';
import './searchDoctor.css';
import GoogleMaps from "../googleMaps/googleMaps";


const SearchDoctor = () =>{
    return (
        <section className="searchDoctor">
        <GoogleMaps/>
            <div className="searchCard">
            <header>
                <h4>Search for a Doctor</h4>
                <form>
                    <select className="specialization">
                        <option selected>Specialization</option>
                        <option >Cardiology</option>
                        <option >Geriatrics</option>
                        <option >Endocrinology</option>
                        <option >General practice</option>
                    </select>
                    <select className="city">
                        <option selected>City</option>
                        <option >Windsor</option>
                        <option >Leamington</option>
                        <option >London</option>
                        <option >Chatham-Kent</option>
                        <option >Toronto</option>
                    </select>
                    </form>
                </header>
            </div>
        </section>
    );
}

export default SearchDoctor;