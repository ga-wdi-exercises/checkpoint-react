import React, { Component } from 'react';

class NewContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			profile_picture: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addContact(this.state);
	}

	handleChange(evt) {
		let target = evt.target;
		let name = target.name;
		let value = target.value;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div>
				<h1>New Contact</h1>
				<form onSubmit={this.handleSubmit}>
					<p>Name:</p>
					<input type="text" name="name" />
					<p>Email:</p>
					<input type="text" name="email" />
					<p>Image URL:</p>
					<input type="text" name="profile_picture" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default NewContact;
