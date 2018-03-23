import React, { Component } from 'react';
import NewContact from '../NewContact/NewContact';
import { Link } from 'react-router-dom';
class Header extends Component {
	render({ Header }) {
		return (
			<h1>
				<nav>{Header}</nav>
			</h1>
		);
	}
}
export default Header;
