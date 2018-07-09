import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <header className='HeaderContainer'>
        <h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/new-contact'>Create New Contact</Link>
          </nav>
        </h1>
      </header>
    )
  }
}

export default Header
