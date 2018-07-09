import React, { Component } from 'react'
import Contact from '../Contact'

class ContactList extends Component {
	render() {
		return(
		<div className="contact-list">
			{this.props.contacts}
			<Contact />
		</div>

		)

	}
}

export default ContactList