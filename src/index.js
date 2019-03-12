const express = require('express');
const parser = require('body-parser');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';


const app = express();

app.set('port', process.env.PORT || 3001);
app.use(parser.json());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
