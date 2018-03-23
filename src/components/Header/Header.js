import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header" />
        <div className="h1" />
        <div className="nav-item">
          <Link to="/">Home Page</Link>
        </div>
        <div className="nav-item">
          <Link to="/new-contact">New Contact</Link>
        </div>
      </div>
    )
  }
}

export default Header
