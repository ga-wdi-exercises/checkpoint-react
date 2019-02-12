// Your <Contact> component will render a single contact. It should contain an outer <div> with a class of contact and include an <img> for the profile picture, <h3> for the name, and <h4> for the email address.

import React, { Component } from 'react';

class Contact extends Component {
	render() {
		let contact = this.props.contacts.filter(contact => contact.name === this.props.match.params.name)[0]
		return (
			<div>
				<img src={contact.profile_picture}></img>
				<h3>{contact.name}</h3>
				<h4>{contact.genus}</h4>
				<h1>{birdy.email}</h1>
			</div>
		);
	}
}

export default Contact;