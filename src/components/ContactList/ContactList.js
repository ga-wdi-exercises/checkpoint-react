import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return <div>{this.props.contacts}</div>;
  }
}

export default ContactList;
