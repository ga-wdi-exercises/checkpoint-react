import React, { Component } from 'react';
import { Header, ContactList } from "react-router-dom"

class App extends Component {
  super(props) 
  this.state = {
  contacts: this.props.contacts
}
render() {
  return (
    <div className="App">
      <p>app</p>
      <Header />
      <ContactList />
    </div>;
  )
}
}

export default App;