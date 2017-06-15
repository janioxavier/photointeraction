import React, { Component } from 'react';
// import CriarPonto from './components/CriarPonto'
import Filtro from './Filtro';
import bell from './Sidebar/bell.PNG';
import history from './Sidebar/history.PNG';
import map_maker from './Sidebar/map-maker.PNG';
import group_people from './Sidebar/group-people.PNG';
import {Link} from 'react-router-dom';


class Sidebar extends Component {

    render() {
        return (
                <div className="App-sidebar-items">
                    <Link to="/pontos" ><img src={map_maker} alt="no"/>Seus lugares</Link>
                    <a onClick={(e)=>alert("falta implementar 'historico'")}><img src={history} alt="no"/>Visualizações recentes</a>
                    <a onClick={(e)=>alert("falta implementar 'pessoas proximas'")}><img src={group_people} alt="no"/>Pessoas próximas</a>
                    <a onClick={(e)=>alert("falta implementar 'notificações'")}><img src={bell} alt="no"/>Notificações</a>
                    <Filtro />
                    <div className="App-adblock">
                        <p>adblock</p>
                    </div>
                </div>
        );
    }
}

export default Sidebar;