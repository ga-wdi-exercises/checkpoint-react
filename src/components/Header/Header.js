import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<header>
					<h1>Header</h1>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/new-contact">New</Link>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;
