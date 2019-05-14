import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class ContactList extends Component {
	render() {
		let contacts = this.props.contacts.map((contact, id) => {
			return <Contact />;
		});
		return <div className="contact-list">{contacts}</div>;
	}
}

export default ContactList;
