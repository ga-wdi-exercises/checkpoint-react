import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>My Contact List</h1>
        <nav>
          <div className="nav-item">
            <Link to="/">Contacts</Link>
          </div>
          <div className="nav-item">
            <Link to="/new-contact">New Contact</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
