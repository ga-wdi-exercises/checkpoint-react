import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {
    BrowserRouter as Router
  } from "react-router-dom"
import App from './components/App/App';

import contacts from "./contacts.json";

ReactDOM.render(
    <BrowserRouter>
        <App contacts={contacts}/>
    </BrowserRouter>, document.getElementById('root'));