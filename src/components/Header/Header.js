import React from 'react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'

const Header = () => (
	<header>
		<h1>Contacts</h1>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/new-contact">New Contact</Link>
		</nav>
	</header>
)

export default Header
