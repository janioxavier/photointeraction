import React, { Component } from 'react';
// import CriarPonto from './components/CriarPonto'
import Filtro from './components/Filtro';
import bell from './bell.PNG';
import history from './history.PNG';
import map_maker from './map-maker.PNG';
import group_people from './group-people.PNG';


class Sidebar extends Component {

    render() {
        return (
            <div className="App-sidebar">
                <div className="App-sidebar-items">
                    <a onClick={(e)=>alert("falta implementar 'seus lugares'")}><img src={map_maker} alt="no"/>Seus lugares</a>
                    <a onClick={(e)=>alert("falta implementar 'historico'")}><img src={history} alt="no"/>Visualizações recentes</a>
                    <a onClick={(e)=>alert("falta implementar 'pessoas proximas'")}><img src={group_people} alt="no"/>Pessoas próximas</a>
                    <a onClick={(e)=>alert("falta implementar 'notificações'")}><img src={bell} alt="no"/>Notificações</a>
                    <Filtro />
                    <div className="App-adblock">
                        <p>adblock</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Sidebar;