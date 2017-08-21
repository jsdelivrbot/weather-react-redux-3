import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // we use this.refs to render 3rd party libraries inside React
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render() {
    // this.refs.map would directly refer to the element below
    return <div ref="map" />;
  }
}

export default GoogleMap;