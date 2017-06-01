import React, { Component } from 'react';
import axios from "axios"
import Modal from 'react-modal';
import mapicon from '../map-maker.PNG';
import closeicon from '../close-icon.png';
import { Control, LocalForm, actions } from 'react-redux-form'
//import { addPoint } from '../actions/pointActions'


const postPoint = (point) => {
    console.log(point)
    return new Promise((resolve,reject) => {
                axios.post('http://rest.learncode.academy/api/photointeraction/point', point)                
            })
}

export default class PointForm extends Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit(point) {        
        actions.submit('point', postPoint(point))
       //actions.submit('user',addPoint(point))
       this.closeModal()
    }

    openModal() {
        this.setState({ modalIsOpen: true })
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
        this.props.parent.fetchLugares()
    }

    render() {
        return (
            <div className="App-siderbar-items">
                <br/>
                <a onClick={this.openModal}>Criar Ponto</a>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Modal"
                >
                    <div className="centered">
                        <img src={closeicon} width="42"
                            className="App-close" onClick={this.closeModal} alt="no" />
                        <br />
                        <h2>Um ponto virtual é um local onde você pode públicar fotos, visualizar comentários, receber avaliações e conversar com pessoas no chat.</h2>
                        
                        <LocalForm model="point" onSubmit={(point) => this.handleSubmit(point)}
                            className="Form-elements">

                            <label>Dê um nome ao seu ponto virtual</label>
                            <Control.text model="point.nome" required />

                            <label>Selecione o local do seu ponto <img src={mapicon} alt="Selecione o local" /></label>
                            Ou informe o CEP:<br />
                            <Control.text model="point.cep" required/>

                            <label>Informe o propósito do seu ponto </label>
                            <Control.select model="point.proposito">                                                                
                                <option value="relacionamento">Relacionamento</option>
                                <option value="negocio">Negócio</option>
                                <option value="informativo">Informativo</option>
                            </Control.select>

                            <label>Descreva seu ponto</label>
                            <Control.textarea rows="5" cols="50" model="point.descricao " required/>
                            
                            <br /><br />

                            <input value="Salvar" type="submit" />
                        </LocalForm>
                    </div>
                </Modal>
            </div>
        )
    }
}
