import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import NewContact from '../NewContact/NewContact'

class Header extends Component {
  render () {
    return (
      <Router>
        <div>
          <header>
            <h1>Contacts </h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/new-contact'>New Contact</Link>
              <Route
                exact
                path='/new-contact'
                render={() => (
                  <NewContact />
              )}
            />
            </nav>
          </header>
        </div>
      </Router>
    )
  }
  }

export default Header
