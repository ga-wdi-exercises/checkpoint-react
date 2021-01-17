import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header.js";
import ContactList from "../ContactList/ContactList.js";
import NewContact from "../NewContact/NewContact.js";

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
    console.log(this.state.contacts);

    return (
      <div className="App">
        <Header />
        <Route
          path="/"
          exact
          render={routerProps => (
            <ContactList contacts={this.state.contacts} {...routerProps} />
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
