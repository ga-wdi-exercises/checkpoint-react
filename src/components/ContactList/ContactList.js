import React, {Component} from 'react'
import Contact from '../Contact/Contact.js'
import NewContact from '../NewContact/NewContact.js'

class ContactList extends Component {
  constructor() {
    super(props)
    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {
    return (

        <div>
            <Contact />
            <NewContact />
        </div>

    )
  }
}

export default ContactList;
