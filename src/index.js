import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import { Route } from "react-router-dom";

import contacts from "./contacts.json";

ReactDOM.render(<App />, document.getElementById('root'));
