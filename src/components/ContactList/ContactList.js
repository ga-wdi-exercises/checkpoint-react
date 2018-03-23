import React, { Component } from 'react';

class ContactList extends Component {

   render() {
      return (
         <div>
            {this.props.contacts.map((contact, i) => {
               return (
                  <div key={i}>
                     <img src={contact['profile_picture']} alt='profile-pic' />
                     <h3>{contact.name}</h3>
                     <h4>{contact.email}</h4>
                  </div>
               )
            })}
         </div>
      );
   }
}

export default ContactList;