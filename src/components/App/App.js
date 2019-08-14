import React, { Component } from 'react';
import Header from "../Header/Header"
import Contacts from "/Users/coomas/sei/sandbox/checkpoint-react/src/contacts.json"
import NewContact from "../NewContact/NewContact"
import ContactList from "../ContactList/ContactList"
import { Route } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: []
    }
  }
  render() {
    console.log(this.state)
    let contacts = Contacts.map(contact => {
      this.setState({ contacts: contact })
    })
    console.log(contacts)
    console.log(this.state)
    return <div className="App">
      <Header />
      <Route path='/' exact render={routerProps => <ContactList {...routerProps} />} />
      <Route path='/new-contact' exact render={() => <NewContact />} />
      <p>app</p>
    </div>
  }
}

export default App;