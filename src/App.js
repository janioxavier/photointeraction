import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import PontoSidebar from './PontoSidebar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const lugares = [];
const favoritos = [];

var NotFound = () => {
  <div>Not Found</div>
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <Header />
        </div>

        <div className="App-sidebar">
          <Switch>
          <Route path="/" exact component={Sidebar} />
          <Route path="/pontos" component={PontoSidebar} />
          <Route component={NotFound}/>
          </Switch>
        </div>
        
      </div>
      </Router>
    );
  }
}
//<PontoSidebar lugares={lugares} favoritos={favoritos}/>    

export default App;
