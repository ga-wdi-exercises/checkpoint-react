import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import data from './contacts.json'
import { BrowserRouter as Router } from 'react-router-dom'

import contacts from "./contacts.json";

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
