import React, { Component } from 'react';
import {
  Map,
  //InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        className={'map'}
        zoom={14}>
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 37.778519, lng: -122.405640 }} />
        <Marker
          name={'Dolores park'}
          position={{ lat: 37.759703, lng: -122.428093 }} />
        <Marker />
        <Marker
          name={'Your position'}
          position={{ lat: 37.762391, lng: -122.439192 }}
        />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: (`AIzaSyCrcRtbzRXLRKVG8JlcaEJTnC4GIWCaShU`)
})(MapContainer)
