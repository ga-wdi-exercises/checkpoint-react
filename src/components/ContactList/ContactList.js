import React, { Component } from 'react';
import Contact from '../Contact/Contact.js';

class ContactList extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		let allContacts = this.props.contacts.map((contact, i) => {
			return <Contact contact={contact} key={i} />;
		});
		return <div className="contact-list">{allContacts}</div>;
	}
}

export default ContactList;
