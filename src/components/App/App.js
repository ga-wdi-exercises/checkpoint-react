import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import NewContact from '../NewContact/NewContact.js'
import ContactList from '../ContactList/ContactList.js'
import Header from '../Header/Header.js'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
        <header>
          <Header/>
        </header>
        <body>
        <Switch>
          <Route path='/' exact
            Component={()=><ContactList/>}/>
          <Route path='/new-contact'
            Component={()=><NewContact/>}/>
        </Switch>  
        </body>
        <p><ContactList/></p>
      </div>;
  }
}

export default App;