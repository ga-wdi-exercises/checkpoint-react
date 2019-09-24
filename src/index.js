import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';

import contacts from "./contacts.json";

ReactDOM.render(
<Router>
<App />
</Router>,
document.getElementById('root'));
