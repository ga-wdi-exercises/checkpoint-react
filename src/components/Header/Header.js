import React, { Component } from 'react'
import '../../styles/index.css'
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div>
        <nav>
          <h1>Contacts App</h1>
          <Link to="/">Home</Link>
          <Link to="/new-contact">New Contact</Link>
        </nav>
      </div>
    )
  }
}


export default Header
