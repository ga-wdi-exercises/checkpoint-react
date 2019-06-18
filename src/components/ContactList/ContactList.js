import React, { Component } from "react";
import "../../styles/index.css";
import Contact from "../Contact/Contact";
import NewContact from "../NewContact/NewContact";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import data from "../../contacts.json";

class ContactList extends Component {
  render() {
    let list = data.map(contact => {
      return (
        <div className="contact-list">
          <div className="contact">
            <img src={contact.profile_picture} />
            <h3>{contact.name}</h3>
            <h4>{contact.email}</h4>
          </div>
        </div>
      );
    });
    return <div className="contact-list">{list}</div>;
  }
}

export default ContactList;
