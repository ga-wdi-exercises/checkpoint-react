import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>{this.props.contact.name}</h3>
        <h4>{this.props.contact.email}</h4>
        <img src={this.props.contact.profile_picture} alt="pic" />
      </div>
    )
  }
}
