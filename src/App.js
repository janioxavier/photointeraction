import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import PontoSidebar from './PontoSidebar'


const lugares = [];
const favoritos = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PontoSidebar lugares={lugares} favoritos={favoritos}/>    
      </div>
    );
  }
}

export default App;
