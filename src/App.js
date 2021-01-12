import React, {Component} from 'react';
import { render } from '@testing-library/react';

import L from 'leaflet';

// import math components
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './App.css';

var myIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [22, 94],
  popupAnchor: [0, 0]
});

class App extends Component{
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    // position variable
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={position}
          icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  } 

}

export default App;
