import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'
import NewContact from '../NewContact/NewContact.js'

class ContactList extends Component {
  render() {
    console.log(this.props.contacts)
    return(
      <div className="App">
        <Header />
        <main>
          <p>Contacts App</p>
          <Route exact path="/" component={ContactList} />
          <Route exact path="/new-contact" component={NewContact} />
        </main>
      </div>
    )
  }
}

export default App





{/* <ContactList>
Your <ContactList> component should render as the homepage of your app.
It should render a <div> with a class of contact-list.
It should take contacts as a prop and render a <Contact> component
for each contact object inside of the contacts prop. */}
