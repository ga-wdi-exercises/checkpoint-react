import React, { Component } from 'react'

export default class ContactList extends Component {
    
    

  render() {
      console.log(this.props.contacts)
      const displayContacts = this.props.contacts.map(contact=>{
        return <div>
        <img src={contact.profile_picture} alt="profile picture"/>
      <h3>{contact.name}</h3>
      <h4>{contact.email}</h4>
      </div>
      })
    return (
      <div className='contacts'>
      
        {displayContacts}
      </div>
    )
  }
}
