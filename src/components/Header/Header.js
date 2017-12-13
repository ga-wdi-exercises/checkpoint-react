import React, {Component} from 'react'
import {
  Route,
  Link
} from 'react-router-dom'


exports default class Header extends Component {

  render() {
    return (
      <div>
        <header>
          <nav>
            <h1>Contacts</h1>
              <Link to='/'>Home</Link>
              <Link to='/new-contact'>New Contact</Link>
          </nav>
        </header>
        <main>
          <Route
            path='/'
            render={}
          />
          <Route
            path='/new-contact'
            render={}
          />
        </main>
      </div>
    )
  }

}
