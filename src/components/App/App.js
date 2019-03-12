import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts,
      newContact: {}
    };

    this.addContact = this.addContact.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  //come back to this***

  render() {
    return (
      <div className="App">
        <p>app</p>
      </div>
    );
  }
}

export default App;
