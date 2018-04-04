import React, { Component } from 'react'
import Contacts from ./index



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  };
  render () {
    return <div className='App'>
      <Header/>
      <p> <ContactList></p>
      <p> <NewContactList> </p> 
      <p> 
    </div>
  }
}

export default App
