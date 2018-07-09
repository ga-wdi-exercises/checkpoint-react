import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import App from '../App/'
import NewContact from '../NewContact'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>
					<Link to="/">Home</Link>
				</h1>
				<nav>
					<Link to="/new-contact">New Contact</Link>
				</nav>
			</div>

			<div className="main">
				<Route path="/" component={App} />
				<Route path="/new-contact" component={NewContact} />
			</div>
		)
	}
}

export default Header;