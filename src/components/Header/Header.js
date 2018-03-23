import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    <div className="header">
      <Link to="/">
        <h1>Contact List</h1>
      </Link>
      <Link to="/new-contact">
        <nav>New Friend</nav>
      </Link>
    </div>;
  }
}

export default Header;
