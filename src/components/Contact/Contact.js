import React, { Component } from 'react';
import {
    Link,
    Route
  } from 'react-router-dom'
import NewContact from '../NewContact/NewContact'


class Contact extends Component {
    constructor(contact) {
      super(contact);
      this.state = {
        contact: []
      };
    }

render() {
    return (
    <div className="Contact">
    <img src={"sadf"}>Image</img>
    <h3>Name</h3>
    <h4>Email</h4>
    </div>
    )
}
}

export default Contact;