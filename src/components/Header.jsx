import React, { Component } from 'react';
import Logo from './Header/Logo';
import Busca from './Header/Busca';
import UserInfo from './Header/UserInfo';
import {Link} from 'react-router-dom';

import '../App.css';



class Header extends Component {
    render() {
        return (
            <div>
                <div className="App-header-items Logo">
                    <Link to="/"><Logo /></Link>
                </div>

                <div className="App-header-items">
                    <Busca />
                </div>

                <div className="User-info">
                    <UserInfo />
                </div>
            </div>
        );
    }
}

export default Header;