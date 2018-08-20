import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"
class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    contacts: this.props.contacts
  }

}

addContact(contact) {
  this.setState({
    contacts: [...this.state.contacts.contact]
    })
}
  render() {
    return <div className="App">
    <Header/>
    <main>
    <Route path = "/" render={() => <ContactList contacts={this.state.contacts}/>}/>
    <Route path = "new-contact" render = {(props) => <NewContact addContact = {this.addContact}/>}/>
    </main>
      </div>
  }
}

export default App;
