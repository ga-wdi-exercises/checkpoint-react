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
          /* ^ made sense after Farris explained it to me. */
	handleNameInput(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleEmailInput(e) {
		this.setState({
			email: e.target.value
		})
	}

	handleProfilePictureInput(e) {
		this.setState({
			profile_picture: e.target.value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()

		let newContact = {
			name: this.state.name,
			email: this.state.email,
			profile_picture: this.state.profile_picture
		}
		this.props.contacts.push(newContact)
	}

	render() {
		return (
			<div>
				<h1>New Contact</h1>
				<form onSubmit={this.handleFormSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" onChange={this.handleNameInput} />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="text" name="email" onChange={this.handleEmailInput} />
					</div>
					<div>
						<label htmlFor="profile_picture">Profile Pic</label>
						<input type="text" name="profile_picture" onChange={this.handleProfilePictureInput}/>
					</div>
					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default NewContact
