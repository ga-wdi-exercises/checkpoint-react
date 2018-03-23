import React, { Component } from 'react'
//import React, { Component } frimport React, { Component } from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'   // good  Link Route, Switch, Redirect
import contacts from "../../contacts.json"
import Contact from '../Contact/Contact.js'
import ContactList from '../ContactList/ContactList.js'
import NewContacts from '../NewContact/NewContact.js'
import Header from '../Header/Header.js' // good


class App extends Component {
  constructor () {
    super()
    this.state = {
      contacts: contacts
    }
    console.log(this.state.contacts)
  }

  render () {
    return (
      <div>
        <nav>
          <h1>Contact Manager</h1>
          <Link to='/ContactList'>Contacts</Link>
          <Link to='/ContactList'>Home</Link>
           {/* <Link to='/contacts'>New Contacts</Link> */}
        </nav>
        <main>
          <Switch>
          <Route path='/ContactList' component={ContactList} />
          <Route path='/ContactList' render={() => <ContactList />} /> */}
             <Route path='/contacts' render={() => <NewContacts />} />
            <Route path='/contacts' render={() => <Header contacts={this.state.contacts} />} />
            <Route path='/contacts' render={(props) => <ContactList {...props} contacts={this.state.Contacts} />} />
            <Route path='/*' render={() => <Redirect to='/contacts' />} /> 
          </Switch> 
        </main> 
      </div>
    )
  }
}
export default App
