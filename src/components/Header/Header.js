import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Your <Header> component should render:

//  // A <header> element with an <h1>
//  // A <nav> containing two React Router <Link>s, one to the homepage ("/") and the other to create a new contact ("/new-contact").

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* A <header> element with an <h1> */}
        <header>
          <h1>h1 tag</h1>
          <nav>
            {/* A <nav> containing two React Router <Link>s, one to the homepage ("/")
                 and the other to create a new contact ("/new-contact"). */}
            <Link to='/'>Home</Link>
            <Link to='/new-contact'>New Contact</Link>
          </nav>
        </header>
      </div>
    )
  }
}
