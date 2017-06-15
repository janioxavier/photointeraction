import React, { Component } from 'react';

const legendaBusca = 'Encontre negócios, pessoas, empresas e lugares interessantes'


class Busca extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', option: 'Pessoa' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange(event) {        
        this.setState({
            option: event.target.value
        });
    }

    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }


    handleSubmit(event) {
        alert('Falta implementar a busca por ' + this.state.option);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <select value={this.state.option} onChange={this.handleChange}>
                    <option value="Pessoa">Pessoa</option>
                    <option value="Lugar">Lugar</option>
                    <option value="Ponto">Ponto</option>
                </select>
                <input size="60" type="text" value={this.state.value} onChange={this.handleInputChange} />
                <input type="submit" value="Buscar" />
                <br />
                {legendaBusca}
            </form>

        );
    }
}

export default Busca;