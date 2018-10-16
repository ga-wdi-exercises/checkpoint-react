import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <header>
        <h1>
        <nav>
        <Link to={"/"}>Home Page</Link>
        <Link to={"/new-contact"}>New Contact</Link>
        </nav>
        </h1>
      </header>
    )
  }
}

export default Header