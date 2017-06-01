import React, { Component } from 'react'
import Modal from 'react-modal'
import GoogleMaps from './GoogleMap'

export default class GoogleMapsModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: this.props.modalIsOpen
        }
        
    }

    render() {
        console.log(this.state)
        return (
            <Modal isOpen={this.state.modalIsOpen}
                contentLabel="M"
                  shouldCloseOnOverlayClick={true}>
                <GoogleMaps />
            </Modal>
        )

    }
}