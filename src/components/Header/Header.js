import React, { Component } from 'react'
import NewContact from '../NewContact/NewContact'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<header>
				<h1>Title</h1>

				<nav>
					<Link to="/"> homepage </Link>
					<Link to="/new-contact"> new contact </Link>
				</nav>
			</header>
		)
	}
}
export default Header
