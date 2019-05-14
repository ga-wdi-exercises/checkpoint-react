import React, { Component } from 'react'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }
  render () {
    return <div className='App'>
      <Header />
      <Route path='/'
        render={routerProps => (
          <ContactList
            {...routerProps}
            {...this.state} />
        )

        } />
      <Route path='/new-contact'
        render={routerProps => (
          <NewContact
            {...routerProps}
            {...this.state}
          />
        )

        } />
      <p>app</p>
    </div>
  }
}

export default App
