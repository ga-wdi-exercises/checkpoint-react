import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';

import contacts from "./contacts.json";
import {
  BrowserRouter as Router
} from 'react-router-dom'
ReactDOM.render(<App />, document.getElementById('root'));
