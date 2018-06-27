import React from 'react';
import './searchDoctor.css';
import GoogleMaps from "../googleMaps/googleMaps";


class SearchDoctor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           location: {
               lat: 42.3149,
               lng: -83.0364
           }
        }
    }

    filterLocations = (e)=>{
        let newState = "";
        switch(e.target.value){
            
            case "Dr. Stephanie Satz":  newState = Object.assign({lat: 35.3149, lng: -83.0364}, ...this.state.location);
                                        this.setState({location: newState});
                                        break;
            case "Dr Winger Michael":  newState = Object.assign({lat: 42.3149, lng: -83.0364}, ...this.state.location);
                                        this.setState({state: newState});
                                        break;
            case "Dr Zaher Amjad":  newState = Object.assign({lat: 42.3149, lng: -83.0364}, ...this.state.location);
                                        this.setState({state: newState});
                                        break;
            case "Dr. Charles McFarlane":  newState = Object.assign({lat: 42.3149, lng: -83.0364}, ...this.state.location);
                                        this.setState({state: newState});
                                        break;
        }
    }


    render(){
        const {location} = this.state;
    return (
        <section className="searchDoctor">
        <GoogleMaps location={location}/>
            <div className="searchCard">
            <header>
                <h4>Search for a Doctor</h4>
                <form>
                    <select onChange={this.filterLocations} className="specialization">
                    <option>Select a Doctor</option>
                    <option defaultValue>Dr Winger Michael</option>
                    <option>Dr. Stephanie Satz</option>
                    <option>Dr. Zaher Amjad</option>
                    <option>Dr. Charles McFarlane</option>
                    </select>
                    {/* <select className="city">
                        <option selected>City</option>
                        <option >Windsor</option>
                        <option >Leamington</option>
                        <option >London</option>
                        <option >Chatham-Kent</option>
                        <option >Toronto</option>
                    </select> */}
                    </form>
                </header>
            </div>
        </section>
    );
    }
}

export default SearchDoctor;