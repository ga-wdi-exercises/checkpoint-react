import React, { Component } from 'react';
import {  Link } from 'react-router-dom'


class Header extends Component {

  render() {
    return (<div className="App">
        <header>
        <h1>Contacts</h1>
        </header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/new-contact">New Contact</Link>
        </nav>
      </div>
      )
  }
}

export default Header;