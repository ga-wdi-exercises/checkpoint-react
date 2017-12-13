import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch,
  Router,
} from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      contacts: this.props.contacts
      }
    }

  render(){
    return (
      <div className="App">
        <div><Header /></div>
        <div>
          <Switch>
            <Route path='/' render={()=> <ContactList contacts={this.state.contacts} />}/>
            <Route path='/new-contact' component={NewContact} />
            <Route path='/*' render={()=> <Redirect to='/' />}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
