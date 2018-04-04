import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import NewContact from "../NewContact/NewContact.js";
import ContactList from "../ContactList/ContactList.js";

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Contacts</h1>
            <Link to="/">Home</Link>
            <Link to="/new-contact">New Contact</Link>
          </nav>
          <main>
            <Switch>
              <Route
                path="/"
                render={contacts => {
                  return <ContactList />;
                }}
              />
              <Route
                path="/new-contact"
                render={() => {
                  return <NewContact />;
                }}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default Header;
