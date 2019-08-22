import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{
                lat: 53.662,
                lng: -2.777,
          }}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }}
        >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB9-449YKR60GMDFtlaiFHJiU3W5MYrPJ4")
})(MapContainer)
