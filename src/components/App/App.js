import React, { Component } from 'react'
// import React, { Component } frimport React, { Component } from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'   // good  Link Route, Switch, Redirect
import ContactsData from '../../contacts.json'
import ContactList from '../ContactList/ContactList.js'
import NewContact from '../NewContact/NewContact.js'
import Contact from '../Contact/Contact.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      contacts: ContactsData
    }
    console.log(this.state.contacts)
    this.AddContacts = this.AddContacts.bind(this)
  }

  AddContacts (contact) {
    // let array = this.state.contacts
    // contact.push(contact)
    // this.setState({
    //   contacts: contact
    // })
    console.log('this function worked')
  }

  render () {
    return (
      <div>
        <nav className='nav'>
          <h1>Contact Manager</h1>
          {/* TWO <Link>s, one to the homepage and the other to the new contact page */}
          <Link to='/ContactList'> Home </Link>
          <Link to='/NewContact'> New Contacts </Link>
        </nav>
        <main>
          <Switch>
            <Route path='/NewContact' render={() => <NewContact AddContacts={this.AddContacts} />} />
            <Route path='/contacts' render={() => <ContactList contacts={this.state.contacts} />} />
            <Route path='/contact' render={() => <Contact contact={this.state.contacts} />} />
            <Route path='/*' render={() => <Redirect to='/contacts' />} />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App
