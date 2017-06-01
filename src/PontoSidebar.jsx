import React, { Component } from 'react';
import PointForm from './components/PointForm'
import axios from 'axios'

class PontoSidebar extends Component {
    constructor(props) {
        super(props)
        this.fetchLugares()
        this.state = {
            meusLugares: [],
            favoritos: []
        }   
    }

    componentDidMount() {
        this.fetchLugares()
    }

    fetchLugares() {
        axios.get('http://rest.learncode.academy/api/photointeraction/point')
            .then(response => {
                this.setState({ meusLugares: response.data })
            })
    }

    render() {

        const lugares = this.state.meusLugares.map((lugar) =>
            <li key={lugar.id}>{lugar.nome}</li>)

        return (
            <div>
                <h1> Meus lugares</h1>
                <ul>
                    {lugares}
                    <PointForm parent={this}/>
                </ul>
                <h1> Lugares Favoritos</h1>
                <ul>
                </ul>
            </div>
        );
    }
}


export default PontoSidebar;