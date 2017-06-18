import React, { Component } from 'react'
import Modal from 'react-modal';
import SigninGoogleButton from './SigninGoogleButton'
import closeicon from './close-icon.png';
import '../App.css'

export default class ModalSignin extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: props.abrir }
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <Modal isOpen={this.state.isModalOpen}
        onClose={() => this.closeModal()} contentLabel="Modal">
        <div className="centro">
          <h1>Entre com a sua conta</h1>
          <br />
          <SigninGoogleButton setUser={this.props.setUser} closeModal={this.closeModal}/>

        </div>
      </Modal>
    )
  }
}

