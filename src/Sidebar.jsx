import React, { Component } from 'react';
import CriarPonto from './components/CriarPonto'
import './App.css';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criarPonto: false,
            EncontrarPessoas: false,
            ConversaPessoas: false,
            ConfigurarNotifica: false
        }

    }

    render() {
        return (
            <div className="App-sidebar">
                <div className="App-sidebar-items">
                    <CriarPonto />
                </div>

                <div className="App-sidebar-items">
                    <a> Encontre pessoas lugares ou empresas</a>
                </div>

                <div className="App-sidebar-items">
                    <a> Converse com pessoas de outras regiões</a>
                </div>

                <div className="App-sidebar-items">
                    <a> Configure notificações em regiões de seu interesse</a>
                </div>

            </div>
        );
    }
}

export default Sidebar;