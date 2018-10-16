import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div className="contact">
        <img src={this.props.profile_picture} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <h4>{this.props.email}</h4>
      </div>
    )
  }
}

export default Contact
