import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img src={this.props.contact} alt="profile" />
        <h3>Name{this.props.name}</h3>
        <h4>Email</h4>
      </div>
    );
  }
}

export default Contact;
