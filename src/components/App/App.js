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
    //Thought process: in App, have a function that would take in a new contact variable and push it
    //to the state. Send that function into a callback for NewContact, and invoke it after creating the new
    //contact object. I don't get an error, and this function IS getting called, but the new contact isn't getting
    //added to the state.
    const updatedContactList = this.state.contacts.push(contact)
    this.setState({contacts: updatedContactList})
    console.log("This function is hit")
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