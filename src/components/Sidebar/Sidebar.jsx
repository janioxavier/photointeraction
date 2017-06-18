import React, { Component } from 'react';
// import CriarPonto from './components/CriarPonto'
import Filtro from '../Filtro';
import bell from './bell.PNG';
import history from './history.PNG';
import map_maker from './map-maker.PNG';
import group_people from './group-people.PNG';
import { Link } from 'react-router-dom';


class Sidebar extends Component {

    render() {
        return (
            <aside className="flex-container aside">
                <Link className="flex-item" to="/pontos" ><img  src={map_maker} alt="no" />Seus lugares</Link>
                <Link className="flex-item" to="" onClick={(e) => alert("falta implementar 'hitorico'")}>
                    <img  src={history} alt="no" />Visualizações recentes
                </Link>
                <Link className="flex-item" to="" onClick={(e) => alert("falta implementar 'pessoas proximas'")}>
                    <img  src={group_people} alt="no" />Pessoas próximas
                </Link>
                <Link className="flex-item" to="" onClick={(e) => alert("falta implementar 'notificações'")}>
                    <img  src={bell} alt="no" />Notificações
                    </Link>
                <Filtro className="flex-item" />
                <div className="flex-item App-adblock">
                    <div className="">
                    adblock
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;