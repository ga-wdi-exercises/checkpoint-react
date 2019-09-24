import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      contacts: props.contacts
    }
  }
  render() {
    return (
    <div className="App">
        <Header />
        <main>
        <Route path="/" exact 
          render = {routeProps => (
            <ContactList contacts={this.state.contacts} {...routeProps}/>
        )}/>
        <Route path="/new-contact" exact component = {NewContact} />
        </main>
    </div>
    )
  }
}

export default App;