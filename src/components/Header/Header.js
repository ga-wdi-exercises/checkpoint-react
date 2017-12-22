import React, {Component} from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

export default class Header extends Component {


  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-contact">New Contact</Link>
        </nav>
        <main>
          <Route
            path="/"
            render={() => (
              <ContactList />
            )}
          />
          <Route
            path="new-contact"
            render={() => (
              <NewContact />
            )}
          />
        </main>
      </div>
    )
  }

}
