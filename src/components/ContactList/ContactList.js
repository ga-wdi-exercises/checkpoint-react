import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class ContactList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: this.props.contacts
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      contacts: nextProps.contacts
    });
  }
  
  getContacts() {
    return this.state.contacts.map( (contact) => {
   	  let temp = { ...contact };
      return <Contact contact={ temp } key={ contact.email } />
    } );
  }
  
  render() {
    return <div className="contact-list">
      { this.getContacts() }
      </div>;
  }
}

export default ContactList;