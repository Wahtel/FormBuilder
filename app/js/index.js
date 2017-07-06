import '../scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './containers/App';
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App/>
    {/*<Route path='/' component={App} />*/}
  </BrowserRouter>
</Provider>
, app
);