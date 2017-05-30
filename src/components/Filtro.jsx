import React, { Component } from 'react';

class Filtro extends Component {
    render() {
        return (
            <form className="Form-elements">
                <h1>Filtros</h1>
                <label>
                    <input type="checkbox" value="Relacionamento" />
                    Relacionamento
                </label>
                <label>
                    <input type="checkbox" value="Negócio" />
                    Negócio
                </label>
                <label>
                    <input type="checkbox" value="Informativo" />
                    Informativo
                </label>
            </form>
        );
    }
}

export default Filtro;

