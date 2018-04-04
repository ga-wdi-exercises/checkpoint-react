import React, { Component } from 'react'

class NewContact extends Component {
	render() {
		return (
			<div>
				<div>
					{this.props.name}
					{this.props.email}
					{this.props.profile_picture}
				</div>

				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type=""
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Email:
						<input
							type=""
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Profile_Picture:
						<input
							type=""
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}
export default NewContact
