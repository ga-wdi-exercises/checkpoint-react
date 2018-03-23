import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <h1>Contacts</h1>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/new-contact">Add New Contact</Link>
        </Router>
      </nav>
    );
  }
}

export default Header;
