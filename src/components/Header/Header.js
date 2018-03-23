import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Your <Header> component should render a <header> element
// with an <h1> and a <nav> containing two React Router <Link>s,
// one to the homepage ("/")
// and the other to create a new contact ("/new-contact").

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-contact">New Contact!</Link>
        </nav>
      </header>
    )
  }
}

export default Header
