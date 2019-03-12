import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"
import "./App.css"
import contactList from "../../../src/contacts.json"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: contactList
    }
    console.log(this.state)
  }

  render() {
    return <div className="App">
        <Header></Header>
        <main>
          <Switch>
        <Route path="/" exact render={props => 
        <ContactList {...props} /> }/>
        <Route path="/new-contact" render={props => 
        <NewContact {...props} /> }/>
        </Switch>
        
        </main>
      </div>;
  }
}

export default App;