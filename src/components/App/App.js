import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Link, Route } from "react-router-dom";

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
        <header>
          <h1>Contacts</h1>
          <nav>
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/NewContact">
              <h3>New Contact</h3>
            </Link>
          </nav>
        </header>
        <Route
          path="/"
          exact
          render={_ => <ContactList contacts={this.state.contacts} />}
        />
        <Route path="/new-contact" component={NewContact} />
      </div>
    );
  }
}

export default App;
