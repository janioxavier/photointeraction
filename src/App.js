import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import PontoSidebar from './components/PontoSidebar'
import Content from './components/Content'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ModalSigin from './components/ModalSignin'

var NotFound = () => {
  <div>Not Found</div>
}

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      lugares : []
    }
  }

  render() {
    const isUserLoggedIn = false

    return (      
      <Router>        
      <div className="App">
        <ModalSigin abrir={!isUserLoggedIn}/>
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

        <div className="App-content">
          <Content />
        </div>
        
      </div>
      </Router>
    );
  }
}
//<PontoSidebar lugares={lugares} favoritos={favoritos}/>    

export default App;
