import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import ContactList from "../ContactList/ContactList.js";
import Contact from "../Contact/Contact.js";

class App extends Component {
  render() {
    this.state = {
      contacts: this.props.contacts
    };
    return (
      <div className="App">
        <Header />
        <ContactList />
      </div>
    );
  }
}

export default App;
