import React, { Component } from 'react'
import Modal from 'react-modal';
import SigninGoogleButton from './SigninGoogleButton'
import closeicon from './close-icon.png';
import '../App.css'

export default class ModalSignin extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: props.abrir }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
        <img src={closeicon} width="42"
                            className="App-close" onClick={this.closeModal.bind(this)} alt="no" />
        <div className="centro">
          <h1>Entre com a sua conta</h1>
          <br/>          
          <SigninGoogleButton />
          
        </div>
      </Modal>
    )
  }
}

