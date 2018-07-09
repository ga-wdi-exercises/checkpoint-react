import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <h1>Contact App</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/new-contact'>New Contact</Link>
        </nav>
      </div>
    )
  }
}

export default Header
