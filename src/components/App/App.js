import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      contacts: this.props.contacts
    }
  }
  render() {
    return <div className="App">
        <header>
          <nav>
            <h1><Link to='/'>Contact List</Link></h1>
            <h1><Link to='/new-contact'>New Contact</Link></h1>

          </nav>

        </header>
        <Route
                path='/'
                exact
                render ={(routerParams)=>{
                return <ContactList
                contacts={this.state.contacts}
                {...routerParams}
              />
            }}
          />
          <Route
                path='/new-contact'
                exact
                render ={(routerParams)=>{
                return <NewContact
                {...routerParams}
              />
            }}
          />
      </div>;
  }
}

export default App;