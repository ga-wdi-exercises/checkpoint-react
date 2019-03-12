import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import contacts from "../../contacts.json";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: props.contacts };
  }
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <main>
          <Route
            path="/"
            exact
            render={props => <ContactList contacts={this.state.contacts} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
