import React, { Component } from 'react';
import Logo from './components/Logo';
import Busca from './components/Busca';
import UserInfo from './components/UserInfo';


import './App.css';



class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="App-header-items Logo">
                    <Logo />
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