import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';

import contacts from "./contacts.json";

ReactDOM.render(<App />,  document.getElementById('root'));
