import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Contacts</h1>
					<nav>
						<Link to='/'>
						<p>HOME</p>
						</Link>
						<Link to='/new-contact'>
						<p>NEW Contact</p>
						</Link>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;