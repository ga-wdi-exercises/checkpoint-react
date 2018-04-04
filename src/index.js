import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App/App'

import contacts from './contacts.json'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
	<BrowserRouter>
		<App contacts={contacts} />
	</BrowserRouter>,
	document.getElementById('root')
)
