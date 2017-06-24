import React, { Component } from 'react';
import PointForm from '../Forms/PointForm'
import axios from 'axios'
import restURL from '../../restURL'
import { Link } from 'react-router-dom';

class PontoSidebar extends Component {
    constructor(props) {
        super(props)
        this.fetchLugares()
        this.state = {
            meusLugares: [],
            favoritos: []
        }
        this.addLugar = this.addLugar.bind(this)
    }

    componentDidMount() {
        this.fetchLugares()
    }

    addLugar(lugar) {
        const lugares = this.state.meusLugares
        lugares.push(lugar)
        this.setState({ meusLugares: lugares})
    }

    fetchLugares() {

        axios.get(restURL +'/point')
            .then(response => {
                this.setState({ meusLugares: response.data })
            })
    }

    render() {
        const lugares = this.state.meusLugares.map((lugar) =>
            <Link key={lugar.id} to={"/lugar/"+lugar.id}>
                <li >{lugar.nome}</li>
            </Link>
        )

        return (
            <div>
                <h1> Meus lugares</h1>
                <ul>
                    {lugares}
                    <PointForm addLugar={this.addLugar}/>
                </ul>
                <h1> Lugares Favoritos</h1>
                <ul>
                    Nenhum ponto favorito
                </ul>
            </div>
        );
    }
}


export default PontoSidebar;