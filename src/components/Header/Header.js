import React, { Component } from "react";
import "../../styles/index.css";
import ContactList from "../ContactList/ContactList";
import Contact from "../Contact/Contact";
import NewContact from "../NewContact/NewContact";
import { Link, Route, Switch, Redirect } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Contacts</h1>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/new-contact"}>New Contact</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
