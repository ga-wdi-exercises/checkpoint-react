import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header>
        <h1>Contact List App</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/new-contact'>Create New Contact</Link>
        </nav>
      </header>
    )
  }
}

export default Header
