import React, { Component } from 'react';
import axios from "axios"
import Modal from 'react-modal';
import mapicon from '../Sidebar/map-maker.PNG';
import closeicon from '../close-icon.png';
import { Control, LocalForm, actions } from 'react-redux-form'
import restURL from "../../restURL"
//import GoogleMapsModal from './GoogleMapsModal'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

//import { addPoint } from '../actions/pointActions'


const postPoint = (point) => {
    console.log(point)
    return new Promise((resolve, reject) => {
        axios.post(restURL + '/point', point)
    })
}

export default class PointForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            address: 'Natal, RN',
            lat: '',
            lng: '',
        }
        this.onChange = (address) => this.setState({ address })
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit(point) {
        const latLng = geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                const lat = latLng.lat
                const lng = latLng.lng
                point = { ...point, lat, lng }                
                actions.submit('point', postPoint(point))
                console.log('Success', latLng)
            })
            .catch(error => console.error('Error', error))


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

    openMapsModal() {
        // Unplemented
        //return <div><GoogleMapsModal modalIsOpen={true} /></div>
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        const myStyles = {
            root: { position: 'relative' },
            input: { width: '50%' },
            autocompleteContainer: {}
        }

        return (
            <div className="App-siderbar-items">
                <br />
                <a onClick={this.openModal}>Criar Ponto</a>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Modal"
                >
                    <div className="centered">
                        <img src={closeicon} width="42"
                            className="App-close" onClick={this.closeModal.bind(this)} alt="no" />
                        <br />
                        <h2>Um ponto virtual é um local onde você pode públicar fotos, visualizar comentários, receber avaliações e conversar com pessoas no chat.</h2>

                        <LocalForm model="point" onSubmit={(point) => this.handleSubmit(point)}
                            className="Form-elements">

                            <label>Dê um nome ao seu ponto virtual</label>
                            <Control.text model="point.nome" required />

                            <label>Informe o local do seu ponto
                                <img src={mapicon} alt="Selecione o local"
                                    onClick={this.openMapsModal.bind(this)} /></label>

                            <PlacesAutocomplete
                                inputProps={inputProps}
                                styles={myStyles} />

                            <label>Informe o propósito do seu ponto </label>
                            <Control.select model="point.proposito">
                                <option value="relacionamento">Relacionamento</option>
                                <option value="negocio">Negócio</option>
                                <option value="informativo">Informativo</option>
                            </Control.select>

                            <label>Descreva seu ponto</label>
                            <Control.textarea rows="5" cols="50" model="point.descricao " required />

                            <br /><br />

                            <input value="Salvar" type="submit" />
                        </LocalForm>
                    </div>
                </Modal>
            </div>
        )
    }
}
