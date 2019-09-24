import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

//Specific Imports
import Contacts from "../Contact/Contact"
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContactList from "../NewContact/NewContact"




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: props.Contacts

    }
  }


  render() {
    // console.log()
    return( 
    <div className="App">
      <Header></Header>
      <nav className="navBar">
        <Link to="/">
          <h3>Contact List</h3>
        </Link>
        <Route path="/" exact component={ContactList}></Route>

        <Link to="/new-contact">
          <h3>New Contact List</h3>
        </Link>
        <Route path="/new-contact" exact component={NewContactList}></Route>
      </nav>

      <ContactList contactsComponent={Contacts}></ContactList>
      

        
      </div>
    )
  }
}

export default App;