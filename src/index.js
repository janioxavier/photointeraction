import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from "react-redux"
import GoogleMapsModal from './components/GoogleMapsModal'
import SimpleForm from './components/SimpleForm'
import store from "./store"


ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
