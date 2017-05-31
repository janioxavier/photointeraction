import React, { Component } from 'react';
import Modal from 'react-modal';
import mapicon from './map-maker.PNG';
import closeicon from './close-icon.png';
import { connect } from "react-redux"
import { fetchPoints } from "./actions/pointActions"

@connect((store)=> {
    return{
        user: store.points.user,
        pointFeched: store.points.points,
        points: store.points.points
    }
})
class PontoSidebar extends Component {    
    componentWillMount() {
        this.props.dispatch(fetchPoints())
    }

    render() {
        return (
            <div>
                <h1> Meus lugares</h1>
                <ul>
                    {this.props}
                    <CriarPontoModal />
                </ul>
                <h1> Lugares Favoritos</h1>
                <ul>
                    {this.props}
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
                        <img src={closeicon} width="42" heigth="42" className="App-close" onClick={this.closeModal} alt="no" />
                        <br />
                        <h2>Um ponto virtual é um local onde você pode públicar fotos, visualizar comentários, receber avaliações e conversar com pessoas no chat.</h2>
                        <form className="Form-elements">

                            <label>Dê um nome ao seu ponto virtual</label>
                            <input type="text" required />

                            <label>Selecione o local do seu ponto <img src={mapicon} alt="Selecione o local" /></label>
                            Ou informe o CEP:<br />
                            <input type="text" size="15" required />
                            <label>Informe o propósito do seu ponto </label>
                            <select >
                                <option ></option>
                                <option value="">Relacionamento</option>
                                <option value="">Negócio</option>
                                <option value="">Informativo</option>
                            </select>
                            <label>Descreva seu ponto</label>
                            <textarea rows="10" cols="80" />
                            <br /><br />
                            <input value="Salvar" type="submit" />

                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default PontoSidebar;