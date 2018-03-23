import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import Contact from "../Contact/Contact";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ContactList />
      </div>
    );
  }
}

export default App;
