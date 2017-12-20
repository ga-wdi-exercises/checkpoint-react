import React, {Component} from 'react'

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
		console.log(e.target.value)

		this.setState({
			name: e.target.value
		})
	}

	handleEmailInput(e) {
		console.log(e.target.value)

		this.setState({
			email: e.target.value
		})
	}

	handleProfilePictureInput(e) {
		console.log(e.target.value)

		this.setState({
			profile_picture: e.target.value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		console.log('user submitted form')

		let newContact = {
			name: this.state.name,
			email: this.state.email,
			profile_picture: this.state.profile_picture
		}

		console.log(newContact)

		this.props.contacts.push(newContact)
	}

	render() {
		return (
			<div>
				<h1>New Contact</h1>
				<form onSubmit={this.handleFormSubmit}>
					<p>
						<label htmlFor="name">Name</label>
						<br />
						<input type="text" name="name" onChange={this.handleNameInput} />
					</p>

					<p>
						<label htmlFor="email">Email</label>
						<br />
						<input type="text" name="email" onChange={this.handleEmailInput} />
					</p>

					<p>
						<label htmlFor="profile_picture">Profile Picture</label>
						<br />
						<input
							type="text"
							name="profile_picture"
							onChange={this.handleProfilePictureInput}
						/>
					</p>

					<p>
						<input type="submit" />
					</p>
				</form>
			</div>
		)
	}
}

export default NewContact
