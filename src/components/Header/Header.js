import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from 'react'
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <header>
          <h1>
            <nav><Link to="/">Home</Link> <Link to="/new-contact">New Contact</Link></nav>
          </h1>
        </header>
      </div>
    );
  }
}



export default Header;
