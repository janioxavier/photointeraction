import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar'
import PontoSidebar from './components/Sidebar/PontoSidebar'
import Content from './components/Content'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios"
import rest from "./restURL"
import ModalSigin from './components/ModalSignin'

var NotFound = () => {
  <div>Not Found</div>
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      lugares: []
    }
    this.setUser = this.setUser.bind(this)
  }

  setUser(usuario_logado) {
    const user_rest = rest + "/users"
    axios.get(user_rest).then((response) => {
      var data = response.data
      var user_find = data.filter((element) => {
        return element.email == usuario_logado.email
      }
      )
      if (user_find !== undefined) {
        this.setState({ user: user_find[0] })
      } else {
        axios.post(user_rest, usuario_logado).then((response) => {
          this.setState({ user: response.data })
        })
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const isUserLoggedIn = this.state.user != null
    const username = this.state.user != null ? this.state.user.nome : ""
    return (
      <Router>
        <section>
          {/*<ModalSigin abrir={!isUserLoggedIn} setUser={this.setUser} />*/}

          <Header nomeUsuario={username} />

          <section className="flex-container">
          <Switch>
            <Route path="/" exact component={Sidebar} />
            <Route path="/pontos" component={PontoSidebar} />
            <Route component={NotFound} />
          </Switch>

          <section className="map-container">
            <Content />
          </section>
          </section>
        </section>
      </Router >
    );
  }
}
//<PontoSidebar lugares={lugares} favoritos={favoritos}/>

export default App;
