import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import contacts from '../../contacts'
import { Route, Switch, Link } from 'react-router-dom'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: this.props.contacts
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Contacts</h1>
          <Link to="/">Home</Link>
          <Link to="/NewContact">New Contact</Link>
        </nav>
        <main>
          <Route path="/" Component={App} />
          <Route path="/NewContact" Component={NewContact} />
        </main>
      </div>
    )
  }
}

export default App
