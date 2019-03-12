import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>Hearder Component</h1>
        </header>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/new-contact">New contact</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
