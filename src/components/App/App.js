import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { contacts: props.contacts }
    this.addContact = this.addContact.bind(this)
  }

  addContact(contact){
    this.setState({contacts: this.state.contact.push(contact)})
    console.log("Something happened!")
  }

  render() {
    return(
      <div className="App">
        <Header />
        <Route path="/" exact render={() => <ContactList contacts={this.state.contacts}/>}/>
        <Route path="/new-contact" render={() => <NewContact pushContact={this.addContact}/>}/>
      </div>
    )
  }
}

export default App;