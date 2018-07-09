import React, { Component } from 'react'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    }
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <p>app</p>
        </div>
        <Header />
        <Router
          path=''
          Component={ContactList}
        />
      </Router>
    )
  }
}

export default App