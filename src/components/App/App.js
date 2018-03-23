import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import { Link, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: this.props.contacts
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(e) {
    let name = e.target.value;
  }
  handleImage() {
    let image = e.target.value;
  }
  handleEmail() {
    let email = e.target.value;
  }
  handleSubmit() {}
  render() {
    return;
    <div className="App">
      <Header />
      <ContactList contacts={this.props.contacts} />
    </div>;
  }
}

export default App;
