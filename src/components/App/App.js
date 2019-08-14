import React, { Component } from "react";
import ContactList from "../ContactList/ContactList.js";
import NewContact from "../NewContact/NewContact.js";
import Header from "../Header/Header.js";
import { Route } from "react-router-dom";

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
        <Header />
        <Route
          path="/"
          render={() => <ContactList contacts={this.state.contacts} />}
        />
        <Route path="/new-contact" render={() => <NewContact />} />
      </div>
    );
  }
}

export default App;
