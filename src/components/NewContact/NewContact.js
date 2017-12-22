import React, { Component } from 'react'
import Header from '../Header/Header'

class NewContact extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			email: '',
			profile_picture: ''
		}

		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleEmailInput = this.handleEmailInput.bind(this)
		this.handleProfilePictureInput = this.handleProfilePictureInput.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}
	handleNameInput(e) {
		this.setState({
			name: e.target.value
		})
	}
	handleEmailInput(e) {
		this.setState({
			name: e.target.value
		})
	}
	handleProfilePictureInput(e) {
		this.setState({
			name: e.target.value
		})
	}
	handleFormSubmit(e) {
		e.preventDefault(e)
		let { name, email, profile_picture } = e.target.elements
		this.props.addNewContact({
			name: name.value,
			email: email.value,
			profile_picture: profile_picture.value
		})
		this.props.history.push('/')
	}
	render() {
		return (
			<div>
				<h1> New Contact</h1>
				<form onSubmit={this.handleFormSubmit}>
					<p>
						Name:<br />
						<input type="text" name="name" onChange={this.handleNameInput} />
					</p>
					<p>
						Email:<br />
						<input type="text" name="email" onChange={this.handleEmailInput} />
					</p>
					<p>
						Profile Picture: <br />
						<input
							type="text"
							name="profile_picture"
							onChange={this.handleProfilePictureInput}
						/>
					</p>

					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default NewContact
