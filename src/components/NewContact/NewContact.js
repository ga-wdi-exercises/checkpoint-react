import React, { Component } from 'react';

class NewContact extends Component {
	render() {
		return <div>
			<div>
			{this.props.name}
			{this.props.email}
			{this.props.profile_picture}
			</div>

	{
		"name": "Tweety",
		"email": "tweety@gmail.com",
		"profile_picture": "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
	},
	</div>;
	}
}
export default NewContact;
