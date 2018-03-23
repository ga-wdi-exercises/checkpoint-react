import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App/App'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom'

import contacts from './contacts.json'

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'))
