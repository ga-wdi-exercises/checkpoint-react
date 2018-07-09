import React, { Component } from 'react'

class NewContact extends Component {
	render() {
		return(
			<h1>New Contact</h1>
			<div className="form" method="post">
			<form>
				<label for="name">Name:</label>
				<input type="text" required/>

				<label for="email">Email:</label>
				<input type="email" required/>

				<label for="profile-picture">Profile Picture:</label>
				<input type="img" required/>
			</form>
			</div>
		)
	}
}

export default NewContact