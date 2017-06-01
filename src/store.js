import {applyMiddleware, createStore} from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import { combineForms, modelReducer} from 'react-redux-form'

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, createLogger())

const initialPointState = {
    nome: '',
    descricao: '',
    cep: '',
    proposito: ''
}

export default createStore(combineForms({
    point : initialPointState,

}), middleware)