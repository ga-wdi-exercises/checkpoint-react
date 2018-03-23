import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

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
<Switch>
  <Route
    path="/"
    render={(contacts) => {
      return (
        <ContactList/>
      )
    }}
  />
  <Route
    path="/new-contact"
    render={() => {
      return (
        <NewContact/>
      )
    }}
  />
</Switch>

</div>
</Router>
)

export default Header;
