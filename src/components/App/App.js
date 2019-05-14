import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import NewContact from '../NewContact/NewContact'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'


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

<Header />
      <main>
          <Switch>
          <Route path="/new-contact" render={() => <NewContact />} />
          <Route exact path ="/" render={(routerProps) => <ContactList contacts={this.props.contacts} {...routerProps}/>} />
          </Switch>
          

        </main>

      </div>
    )
  }
}

export default App;


