import React, { Component } from 'react'

class ContactList extends Component {
 render () {
   return (
     <div>
       {this.props.contacts.map(contact => {
         return (
           <div>
             <img src={contact.profile_picture} alt='id-pic' />
             <h3>{contact.name}</h3>
             <h3>{contact.email}</h3>
           </div>
         )
       })}
     </div>
   )
 }
}

export default ContactList