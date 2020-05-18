import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux';
import STORE from './iRedux';

import 'bootstrap/dist/css/bootstrap.css';


import $ from 'jquery';
import 'popper.js/dist/popper';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';


import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import CategoryPage from './components/CategoryPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path='/categories/:catID' exact={true} component={CategoryPage} />
            {/* <Route path='/categories/sweets' component={CategoryPage} /> */}
            <Redirect to="/" />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
