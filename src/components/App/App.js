import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
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
