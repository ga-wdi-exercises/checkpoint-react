import { Link } from 'react-router-dom'
import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to="/">Home</Link>
        <Link to="/new-contact">New Contact</Link>
      </div>
    )
  }
}
export default Header
