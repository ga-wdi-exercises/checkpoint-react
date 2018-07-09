import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import allContacts from "../../contacts.json";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: this.props.contacts
    };
  }
  componentDidMount() {
    fetch(allContacts, {
      method: "GET",
      headers: {
        Accept: "applicaiton/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        setState({
          contacts: res
        });
      });
  }
  render() {
    if (this.state.contacts === 0) {
      return <p>loading...</p>;
    }
    let tweeter = this.state.contacts;
    let list = this.state.contacts.map(item => {
      <div className="contact">
        <h3>{item.name}</h3>
        <h4>{item.email}</h4>
        <img src={item.profile_picture} />
      </div>;
    });
    return <div className="contact">{list}</div>;
  }
}

export default Contact;
