import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<header>
				<h1> Contacts</h1>
				<nav>
					<Link to="/"> Home </Link>
					<Link to="/new-contact"> New Contact </Link>
				</nav>
			</header>
		)
	}
}

export default Header
