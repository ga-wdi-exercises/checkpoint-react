import React, { Component } from 'react'

class Contact extends Component {
	render() {
		return (
			<div className="Contact">
				<img src={this.props.profile_picture} atl={this.props.name} />
				<h3>{this.props.name}</h3>
				<h4>{this.props.email}</h4>
			</div>
		)
	}
}

export default Contact
