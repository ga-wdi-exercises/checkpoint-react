import React, { Component } from 'react';
import contacts from '../../contacts.json'

class ContactList extends Component {
	render() {
    let contactsList = contacts.map(item => {
      return (
        <div className="contact-list" key={item.contact}>
            <img src={item.profile_picture} alt={item.name} />
					<h3>{item.name}</h3>
				<h4>{item.email}</h4> 
        </div>
      );
    });
    return (
      <div>
        {contactsList}
      </div>
    );
  }
}

export default ContactList;