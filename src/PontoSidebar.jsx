import React, { Component } from 'react';
import PointForm from './components/PointForm'
import axios from 'axios'
import restURL from './restURL'
console.log(restURL)

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
        axios.get(restURL +'/point')
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