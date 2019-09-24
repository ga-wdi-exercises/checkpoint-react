import React, { Component } from 'react';
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"
import {Route, Link, Switch} from "react-router-dom"
import contacts from "../../contacts.json"

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
      <Header />
        <p>app</p>
      </div>;

      <Switch>
          <Route path="/" component={ContactList} />
          <Route path="/new-contact" component={NewContact} />
      </Switch>
  }
}

export default App;