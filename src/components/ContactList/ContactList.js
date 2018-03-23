import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Contact from "../Contact/Contact.js";
import contacts from "../../contacts.json";

class ContactList extends Component {
  render() {
    return <Contact {...contacts} />;
  }
}

export default ContactList;
