import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Cartoon Contacts</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-contact">Add New</Link>
      </nav>
    </header>
  )
}

export default Header
