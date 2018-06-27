import React, { Component } from 'react'
import './googleMaps.css';
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const myMapComponent = (props)=>{

}

class GoogleMaps extends Component {
  constructor({props, location}){
    super(props);
  }
  static defaultProps = {
    center: { lat: 42.3149, lng: -83.0364 },
    zoom: 14
  }

 
render() {
  console.log(this.props.location.lat);
  console.log(this.props.location.lng);
    return (
      <div className='googleMaps'>
        <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyCRdd7X61u0Sd_jDBpknEj_P6l_maMqi4A"}}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={this.props.location.lat}
            lng={ this.props.location.lng }
            // text={ 'Where\'s Waldo?' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMaps;