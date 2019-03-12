import React, { Component } from 'react';

class Contact extends Component {
  render() {
    console.log("ContactJS props: ", this.props);
    return (
      <div className="contact">
        <img src={this.props.contact.profile_picture} />
        <h3>{this.props.contact.name}</h3>
        <h4>{this.props.contact.email}</h4>
      </div>
    );
  }
}

export default Contact;