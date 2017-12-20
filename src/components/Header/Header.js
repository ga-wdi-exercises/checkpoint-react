import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch,
  Router,
} from 'react-router-dom'

class Header extends Component {
  render (){
    return(
      <div>
        <header>
          <h1>Welcome to ReactContacts!</h1>
          <nav className='headerBar'>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/new-contact'>Create New Contact</Link></div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
