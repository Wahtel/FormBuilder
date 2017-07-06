const NODE_ENV = process.env.NODE_ENV || 'dev';
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers/reducer';

let middleware;

if (NODE_ENV === 'production') {
  middleware = applyMiddleware(promise(), thunk);
} else {
  middleware = applyMiddleware(promise(), thunk, createLogger());
}

export default createStore(reducer, middleware);