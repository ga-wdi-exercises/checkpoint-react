import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <title>Profile Pictures</title>
        <img src={this.props.profile_picture} />
        <h3>{this.props.email}</h3>
        <h4>{this.props.email}</h4>
      </div>
    );
  }
}

export default Contact;
