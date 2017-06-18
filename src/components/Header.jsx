import React, { Component } from 'react';
import Logo from './Header/Logo';
import Busca from './Header/Busca';
import UserInfo from './Header/UserInfo';
import { Link } from 'react-router-dom';

import '../App.css';

class Header extends Component {
    render() {
        return (
            <header className="flex-container header">

                <Link to="/"><Logo className="flex-item" nome="PhotoInteraction" /></Link>

                <Busca className="flex-item" />

                <div className="flex-iten">
                    <h3 >{}</h3>
                </div>

                <UserInfo className="flex-item" nomeUsuario={this.props.nomeUsuario} />

            </header>

        );
    }
}

export default Header;