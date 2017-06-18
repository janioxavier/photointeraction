
import React, { Component } from 'react';
import usericon from './user-icon.jpg'


class UserInfo extends Component {
    render() {
        return (
            <img src={usericon} height="50" width="50" alt='user info' />
        );
    }
}

export default UserInfo;