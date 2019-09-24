import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import {Route, Link,  BrowserRouter as Router} from "react-router-dom"
 

import contacts from "./contacts.json";

const routing = (
    <Router>
        <App />
    </Router>
)


ReactDOM.render(routing , document.getElementById('root'));
