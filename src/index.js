import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Route, Link, Redirect, Switch } from "react-router-dom";
import App from './components/App/App';
import {
  BrowserRouter as Router
} from "react-router-dom"
import contacts from "./contacts.json";

ReactDOM.render(
  <Router>
    <App prop1={contacts} />
  </Router>,
   document.getElementById('root'));
