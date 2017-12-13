import React, { Component } from 'react';
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import NewContact from "../NewContact/NewContact";
import { Route, Link, Redirect, Switch } from "react-router-dom";

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        contacts: []
      }
      this.handleNewContact = this.handleNewContact.bind(this)
    }

  handleNewContact(newContact) {
    let tempContact = this.state.contacts
    tempContact.push(newContact)
    this.setState({
      contacts: tempContact
    })
    this.props.history.push(`/*/${newContact.symbol}`)
  }
  render() {
    return (
      <div>
        <div className="App">
          <p>app</p>
        </div>;
      </div>
    )
  }
}

export default App;
