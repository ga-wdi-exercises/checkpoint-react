import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/App/App';
import contacts from "./contacts.json";

import './styles/index.css';


ReactDOM.render(
  <Router>
    <App contacts={contacts}/>
  </Router>, document.getElementById('root'));
