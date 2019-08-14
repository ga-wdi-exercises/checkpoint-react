import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router
  } from "react-router-dom"
  import { Link, Route, Switch, Redirect } from "react-router-dom";

import contacts from "./contacts.json";


ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );





//   serviceWorker.unregister();
