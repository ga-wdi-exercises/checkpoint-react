// Your <Contact> component will render a single contact. It should contain an outer <div> with a class of contact and include an <img> for the profile picture, <h3> for the name, and <h4> for the email address.

import React, { Component } from 'react';
import contacts from '../../contacts.json'

class Contact extends Component {
	constructor () {
		super()
		this.state = {
			contacts : contacts
		}
	}
	render() {
		// let contact = this.props.contacts.filter(contact => contact.name === this.props.match.params.name)[0]
		return (
			<div className='contact' key={this.state.contacts._id}>
				<img src={this.state.contacts.profile_picture}></img>
				<h3>{this.state.contacts.name}</h3>
				<h4>{this.state.contacts.email}</h4>
			</div>
		);
	}
}

export default Contact;