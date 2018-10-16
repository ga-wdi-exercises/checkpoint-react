import React, { Component } from "react";

class Contact extends Component {

  constructor (props) {
    super(props)
    this.state = {
      contact: {
        profile_picture: this.props.contacts.profile_picture,
        name: this.props.contacts.name,
        email: this.props.contacts.email
      }
    }
  }

  render() {
    return (
      <div className="contact">
      <img src={this.state.contact.profile_picture} alt='' />
      <h3>{this.state.contact.name}</h3>
      <h4>{this.state.contact.email}</h4>
      </div>
    )
  }
}

export default Contact;
