import React, { Component } from "react";
import Header from "../Header/Header.js";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import ContactList from "../ContactList/ContactList.js";

class App extends Component {
  constructor(props) {
    super(props);
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
