import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';

// using ES6 modules
import { Router, Route, Switch } from 'react-router'

import contacts from "./contacts.json";

var Router = require('react-router').Router

ReactDOM.render(
  <Router><App contacts={contacts} /></Router>, 
  document.getElementById('root'));
