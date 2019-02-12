import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';
import {Link, Route } from 'react-router-dom'

class App extends Component {

constructor(props){
  super(props)
  this.state = {
    contacts: props.contacts
  }
}

  render() {
    return <div className="App">
        <p>app</p>
        <Route path= "/" component = { ContactList }/>
        <Route path= "/new-contact" component = { NewContact }/>
        

        {/* <Header />
        <ContactList />  */}
      </div>;
  }
}

export default App;