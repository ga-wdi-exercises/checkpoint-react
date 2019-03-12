import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1>Contacts</h1>
        <nav>
          <Link to="/">HOME</Link>{"   "}
          <Link to="/new-contact">NEW CONTACT</Link>
        </nav>
      </div>
    )
  }
}
