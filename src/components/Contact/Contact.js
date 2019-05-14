import React, { Component } from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div className="contact">
				<img src={`${this.props.contact.profile_picture}`} alt={`${this.props.contact.name}`} />
				<h3>{this.props.contact.name}</h3>
				<h4>{this.props.contact.email}</h4>
			</div>
		);
	}
}

export default Contact;
