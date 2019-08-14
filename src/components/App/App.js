import React, { Component } from 'react';
import Header from '../Header/Header'
import {Route} from 'react-router-dom'
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
        <Header/>
        {/* <ContactList {...this.state}/> */}
        <main>
          <Route exact path='/' render = { () => (<ContactList {...this.state}/>)}/>
          <Route exact path='/new-contact' component = {NewContact}/>
        </main>
        <p>app</p>
      </div>;
  }
}

export default App;