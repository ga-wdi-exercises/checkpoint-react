import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
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
        <Route path="/" component={ContactList} />
        <Route path="/new-contact" component={NewContact} />
      </div>
    )
  }
}

export default App
