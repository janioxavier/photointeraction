import React, { Component } from 'react';
import Modal from 'react-modal';
import PointForm from './PointForm'

export default class PointModal extends Component {
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
                <PointForm modal={this.state.modalIsOpen}/>
                    
                </Modal>
            </div>
        )
    }
}
