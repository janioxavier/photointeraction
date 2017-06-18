import React, { Component } from 'react';

class Logo extends Component {
   render() {
        return (
            <h1>{this.props.nome}</h1>
        );
    }
}


export default Logo;