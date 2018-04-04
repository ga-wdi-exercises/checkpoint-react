import React, { Component } from "react";

class Contact extends Component {
  render() {
    const profile_picture = this.props.profile_picture;
    const name = this.props.username;
    const email = this.props.caption;
    return (
      <div className="contact">
        <img src={profile_picture} alt={name} />
        <h3>{name}</h3>
        <h4>{email}</h4>
      </div>
    );
  }
}

export default Contact;
