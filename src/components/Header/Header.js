import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Contacts</h1>
        </header>
        <nav>
          <Link to="/">
            <p>Homepage</p>
          </Link>
          <Link to="/new-contact">
            <p>New Contact</p>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
