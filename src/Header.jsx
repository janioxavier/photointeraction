import React, { Component } from 'react';
import Logo from './components/Logo';
import Busca from './components/Busca';
import UserInfo from './components/UserInfo';
import Breadcrumbs from './components/Breadcrumbs'


import './App.css';



class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="Logo">
                    <Logo />
                    <Breadcrumbs />
                </div>


                <div className="Busca">
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