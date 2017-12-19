import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <header>
        <h1> </h1>
        <nav>
          <Link to="/">Contact List</Link>
          <Link to="/new-contact">New Contact</Link>
        </nav>
      </header>
    )
  }
}

export default Header
