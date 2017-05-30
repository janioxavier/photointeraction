import React, { Component } from 'react';
import Modal from 'react-modal';
import mapicon from './map-maker.PNG';

class PontoSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lugares : props.lugares,
            favoritos : props.favoritos
        }
    }

    render() {
        return (
            <div className="App-sidebar">
            <h1> Meus lugares</h1>
            <ul>                
                {this.state.lugares}
                <CriarPontoModal />
            </ul>
            <h1> Lugares Favoritos</h1>
            <ul>
                {this.state.favoritos}
            </ul>
            </div>
        );
    }
}

class CriarPontoModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true })
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }

    render() {
        return (
            <div className="App-siderbar-items">
                <a onClick={this.openModal}>Criar Ponto</a>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Modal"
                >
                    <div className="centered">
                        <a onClick={this.closeModal}>Fechar</a>
                        <h2>Um ponto virtual é um local onde você pode públicar fotos, visualizar comentários, receber avaliações e conversar com pessoas no chat.</h2>
                        <form className="Form-elements">

                            <label>Dê um nome ao seu ponto virtual</label>
                            <input type="text"  required />   

                            <label>Selecione o local do seu ponto <img src={mapicon} width="75" height="75" alt="Selecione o local"/></label>
                            <input type="text" size="50" required />
                            <label>Informe o propósito do seu ponto </label>
                            <select >
                                <option ></option>
                                <option value="">Relacionamento</option>
                                <option value="">Negócio</option>
                                <option value="">Informativo</option>                                
                            </select>
                            <label>Descreva seu ponto</label>
                            <textarea rows="10" cols="80"/>
                            <br/><br/>
                            <input value="Salvar" type="submit" />

                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default PontoSidebar;