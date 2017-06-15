import React, { Component } from 'react';
import GoogleMaps from './Content/GoogleMap'


export default class Content extends Component {
    render() {
        return (

            <GoogleMaps parent={this}/>
        )
    }
}
