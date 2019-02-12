import React, { Component } from "react";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="contact-list">{this.props.contacts}</div>;
  }
}
