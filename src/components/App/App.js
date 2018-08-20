import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import listofContacts from "../../contacts.json";
import newContact from "../NewContact/NewContact";

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
        {/* <nav>
          <Link to="/">
            <h1>Contact List</h1>
          </Link>
          <Link to="/new-contact">
            <h1>New Contact</h1>
          </Link>
        </nav> */}
        {/* <main>
          <Switch>
            <Route path="/"
            exact component={ContactList}
            />
      </Switch> */}
        <p>app</p>
      </div>
    );
  }
}

export default App;
