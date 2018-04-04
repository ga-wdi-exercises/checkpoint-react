import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <title>Friends</title>
        <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/new-contact">Add Contact</Link>
          </p>
        </nav>
      </header>
    )
  }
}

export default Header
