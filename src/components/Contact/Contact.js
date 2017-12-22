import React, {Component} from 'react'

class Contact extends Component {

	render() {
		return (
			<div key={this.props.index} className="contact">
				<img src={this.props.contact.profile_picture} alt="{this.props.contact.name}" />


        <h1>{this.props.contact.name}</h1>
				<h2>{this.props.contact.email}</h2>
			</div>
		)
	}
}

export default Contact
