import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <img alt="{this.props.contact.profile_picture}" src={this.props.contact.profile_picture}/>
        <h1>{this.props.contact.name}</h1>
        <h1>{this.props.contact.email}</h1>
      </div>
    )
  }
}

export default Contact;
