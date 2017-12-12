import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Header from '../Header/Header'

// let contact = {
//   name: "Tweety",
//   email: "tweety@gmail.com",
//   profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts
    };

    this.handleNewContact = this.handleNewContact.bind(this);
  }

  handleNewContact(e) {
    e.preventDefault()
    let {name, email, image} = e.target.elements

    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: name.value,
          email: email.value,
          image: image.value
        }
      ]
    })

    this.props.history.push('/')
  }

  render() {
    return <div className="App">
        <Header />
        <main>
          <Route exact path="/" render={() => <ContactList contacts={this.state.contacts} />} />
          <Route path="/new-contact" render={() => <NewContact handleNewContact={this.handleNewContact}/>} />
        </main>
      </div>;
  }
}

export default App;