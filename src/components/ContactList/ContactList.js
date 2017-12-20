import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch,
  Router,
} from 'react-router-dom'
import '../../styles/index.css'

class ContactList extends Component{
  constructor(props){
    super(props)
    this.state={
      contacts: this.props.contacts
    }
  }

  render(){
    let contacts = this.props.contacts.map((contact,index)=>{
      let linkToContact=`/${contact.name}`
      return(
        <li key={index}>
          <Link to={linkToContact}>{contact.name}</Link>
        </li>
      )
    })
    return(
      <div className='contact=list'>
        <h1>Contacts</h1>
        <ul>
          {contacts}
        </ul>
      </div>
    )
  }
}

export default ContactList
