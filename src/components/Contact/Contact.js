import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

class Contact extends Component {
  render() {
    const profile_picture = this.props.profile_picture;
    const name = this.props.username;
    const email = this.props.caption;
    return (
      <div className="contact">
        <img src={profile_picture} />
        <h3>{this.state.name}</h3>
        <h4>{this.state.email}</h4>
      </div>
    );
  }
}

export default Contact;
