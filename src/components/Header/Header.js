import React, { Component } from 'react'

class Header extends Component {

	render() {
		return (
			<Router>
				<header>
					<h1> Contacts</h1>
					<nav>
						<Link to="/"> Home </Link>
						<Link to="/new-contact"> New Contact </Link>
					</nav>
				</header>
      </Router>
  )
}

    export default Header
