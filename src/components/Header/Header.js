import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <header>
          <h1 />
        </header>
        <nav>
          <Link to='/' />
          <Link to='/new-contact' />
        </nav>
      </div>
    )
  }
}

export default Header
