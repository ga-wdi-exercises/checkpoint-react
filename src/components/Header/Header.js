import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <header>
          <h1> Header Component</h1>
          <Link to='/'>Homepage</Link>
          <Link to='/new-contact'>New Contact</Link>
        </header>
      </div>
    )
    }
}

export default Header
