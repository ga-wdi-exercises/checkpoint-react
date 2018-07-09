import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import allContacts from "../../contacts.json";

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch(allContacts, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
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
      <div className="contact-list">
        <div key={item.name}>
          <p>
            <Link to={"/Contact" + item.name}>{item.name} </Link>
          </p>
        </div>
      </div>;
    });
    return <div className="contact-list">{list}</div>;
  }
}

export default ContactList;
