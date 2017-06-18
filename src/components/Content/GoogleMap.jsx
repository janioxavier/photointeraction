import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import maker from './maker-maps.jpg'
import axios from 'axios'
import restURL from '../../restURL'

function MapItem(props) {
  return <div style={{ width: '10px', height: '10px', backgroundColor: 'red', color: 'red' }}><img src='' alt='' /></div>
}

export default class GoogleMaps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: { lat: -5.7792569, lng: -35.20091600000001 },
      zoom: 11,
      points: []
    }
  }

  componentDidMount() {
    this.fetchLugares()
  }

  fetchLugares() {
    axios.get(restURL + '/point')
      .then(response => {
        var validsPoints = []
        response.data.map((point) => {
          if (point.lat !== undefined && point.lat !== undefined) {
            validsPoints.push(point)
          }
        })
        this.setState({ points: validsPoints })
      })
  }

  render() {
    setTimeout(() => {this.fetchLugares()}, 5000);
    const points = this.state.points.map((point) =>
      <MapItem key={point.id} lat={point.lat} lng={point.lng} text='[O]' />
    )

    return (
      <GoogleMapReact
        apiKey='AIzaSyAnXKwC0Ukpub5FUX7SpZCbpvj-U0Fsx0U'
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
        {points}
      </GoogleMapReact>
    );
  }
}