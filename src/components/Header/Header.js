import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
       <nav>
          <h1>Contacts</h1>
          <Link to="/">Home</Link>
          <Link to="/NewContact">New Contact</Link>
        </nav>
        <main>
          <Route path="/" Component={App} />
          <Route path="/NewContact" Component={NewContact} />
        </main>
    )
  }
}

export default Header
