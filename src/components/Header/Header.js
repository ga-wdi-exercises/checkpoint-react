import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <nav>
          <h1>Contacts</h1>
          <Link to='/'>
            <h4>HOME</h4>
          </Link>
          <Link to='/new-contact'>
            <h4>NEW CONTACT</h4>
          </Link>
        </nav>
        <main>
          <Route
            path='/'
            render={routerProps => {
              return <ContactList {...routerProps} {...this.state} />
            }}
          />
          <Route
            path='/new-contact'
            component={NewContact}
          />
        </main>
      </div>
    )
  }
}

export default Header
