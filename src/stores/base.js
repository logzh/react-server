import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import apiMiddleware from '../middle/http'

let middleware = [thunkMiddleware, apiMiddleware]

// let logger = require('redux-logger')();
// middleware = [...middleware, logger];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore (reducer, initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
