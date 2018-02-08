import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import key from './config';

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}.exp&libraries=geometry,drawing,places`,


    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px`, width:'100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 30.356401, lng: -88.558919 }}
  >
    <Marker 
      position={{ lat: 30.356641, lng: -88.558519 }} 
      onClick={props.onMarkerClick} 
      
    />
  </GoogleMap>
)

class Map extends Component {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        
      />
    )
  }
}

export default Map;