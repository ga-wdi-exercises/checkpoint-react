import React, { Component } from 'react';
import ContactList from './../ContactList/ContactList'
import ContactData from './../../contacts.json'
import Header from './../Header/Header'
import NewContact from './../NewContact/NewContact'
import { Route, Link, Switch } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"



class App extends Component {
  constructor(props){
    super(props)

    this.state={
      contacts:{ContactData}
    }
  }
  render() {
    console.log(this.state.contacts)
    return (
    <div className="App">
      <Header />
      <Route path="/" exact render={props => <ContactList {...props} {...this.state}/>} />
      {/* <Route path="/new-contact" exact render={props => <NewContact {...props} {...this.state}/>} /> */}
    </div>
      )
  }
}

export default App;