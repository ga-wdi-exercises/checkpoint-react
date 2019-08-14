import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import ContactList from "../ContactList/ContactList.js";
import NewContact from "../NewContact/NewContact.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.contacts}</p>
        <Header />
        <Route
          path="/"
          exact
          render={routerProps => (
            <ContactList contacts={this.state.contacts} {...routerProps} />
          )}
        />
        <Route path="/new-contact" exact component={NewContact} />
      </div>
    );
  }
}

export default App;
