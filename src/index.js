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
import HomeContainer from './containers/homeContainer';

import Products from './components/product';
import EditProduct from './containers/editProduct';
import NewProduct from './containers/newProduct';


import reducers from './reducers';
import Require_Auth from './components/hoc/require_auth';
import { AUTH_USER, DEAUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

// Authenticate user if already logged in
const token = localStorage.getItem('token');
console.log(token)
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
} else {
  renderDOM();
}

function renderDOM() {

  ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={Require_Auth(Feature)} />
        <Route path="products" component={Products} >
          <Route path="new" component={NewProduct} />
          <Route path=":id/edit" component={EditProduct} />
          <Route path=":id" component={EditProduct} />

        </Route >
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
  
}
