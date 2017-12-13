import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: this.props.contacts
    }
  }

  render () {
    return (
      <div className="App">
          <Header />
          {/* <ContactList /> */}
        <main>
          <Switch >
            <Route path='/' render={(props) => <ContactList contacts={this.state.contacts} />} />
            <Route path='/new-contact' component={NewContact} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
