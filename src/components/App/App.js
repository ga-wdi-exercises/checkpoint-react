import React, { Component } from 'react';
import {Route} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }















  render() {
    return ( 
    <div className="App">
      <Header/>
        <p>app</p>
        <Route path="/" render={ContactList}/>
        <Route path="/new-contact" render={NewContact}/>
      </div>

      
    ) 
  }
}

export default App;