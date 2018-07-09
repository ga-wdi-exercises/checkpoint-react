import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import NewContact from "../NewContact/NewContact";
import App from "../App/App";

class Header extends Component {
  render() {
    return;
    <div>
      <title>Create a new contact</title>
      <h1>Create a new contact</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/new-contact"}>New Contact</Link>
      </nav>
      <Route path={"/"} exact component={App} />
      <Route path={"/new-contact"} exact component={NewContact} />
    </div>;
  }
}

export default Header;
