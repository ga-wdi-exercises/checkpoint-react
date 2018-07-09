import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return <div className='App'>
      <header>
        <h1>Contacts</h1>
        <nav>
          <li><Link to='/react'>Home </Link></li>
          <li><Link to='/react'>New Contact</Link></li>
        </nav>
      </header>
    </div>
  }
}

export default App
