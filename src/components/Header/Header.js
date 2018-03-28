import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
     <h1>Welcome</h1>
     <nav>
     <h1>React Router</h1>
     <Link to='/contactlist'>Home</Link>
     <Link to='/new-contact'>New Contact</Link>
   </nav>
    )
  }
}

export default Header
