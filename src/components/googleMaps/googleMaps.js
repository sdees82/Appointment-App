import React, { Component } from 'react'
import './googleMaps.css';
import GoogleMapReact from 'google-map-react'
import {Satz, Winger, Amjad, Mcfarlane} from '../doctors/doctors';
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const myMapComponent = (props)=>{

}

class GoogleMaps extends Component {
  constructor({props}){
    super(props);
  }
  static defaultProps = {
    center: { lat: 42.3149, lng: -83.0364 },
    zoom: 12
  }

 
render() {
    return (
      <div className='googleMaps'>
        <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyCRdd7X61u0Sd_jDBpknEj_P6l_maMqi4A"}}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <Satz
            lat={42.339664}
            lng={-82.948219}
          />

          <Winger
            lat={42.311281}
            lng={-82.896953}
          />

          <Amjad
            lat={42.301444}
            lng={-82.998986}
          />

          <Mcfarlane
            lat={42.310508}
            lng={-82.871102}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMaps;