
import React, { Component } from 'react';

const imgsrc = './logo.svg'

class UserInfo extends Component {
   render() {
        return (
            <img src={imgsrc} alt='user info'/>
        );
    }
}

export default UserInfo;