import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import { API_URL } from './actions/index';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import Home from './components/home';

import Products from './components/product/product';
import EditProduct from './components/product/editProduct';
import ProductForm from './components/forms/product_form';


import reducers from './reducers';
import Require_Auth from './components/hoc/require_auth';
import { AUTH_USER, DEAUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

// Authenticate user if already logged in
const token = localStorage.getItem('token');

if (token) {
  axios.get(`${API_URL}/users/me`, { headers: { authorization: token }})
  .then(res => {
    store.dispatch({ type: AUTH_USER, payload: res.data.user });
    renderDOM();
  })
  .catch(err => {
    store.dispatch({ type: DEAUTH_USER });
    renderDOM();
  })
}

function renderDOM() {

  ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={Require_Auth(Feature)} />
        <Route path="products" component={Products} >
          <Route path="new" component={ProductForm} mode="new" />
          <Route path=":id/edit" component={EditProduct} />

        </Route >
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
  
}
