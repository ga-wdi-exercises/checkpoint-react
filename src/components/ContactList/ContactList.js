import React, { Component } from "react"
import { Link } from "react-router-dom"
import Contact from "../Contact/Contact.js"

class ContactList extends Component {
	render() {
		let contacts = this.props.conntacts.map((contact, index) => (
			<Contact message={comment} key={index} />
		))

		return <div class="contact-list">{contacts}</div>
	}
}

export default ContactList
