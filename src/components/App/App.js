import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header.js";
import contactList from "../ContactList/ContactList.js";
import newContact from "../NewContact/NewContact.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }
  updateCharacters(character) {
    this.state.contacts.push(character);
  }
  render() {
    return (
      <div className="App">

        <Header />
        <Route
          path="/"
          exact
          render={routerProps => (
            <contactList contacts={this.state.contacts} {...routerProps} />
          )}
        />
        <Route
          path="/new-contact"
          exact
          render={routerProps => (
            <NewContact contacts={this.state.contacts} {...routerProps} />
          )}
        />
      </div>
    );
  }
}

export default App;