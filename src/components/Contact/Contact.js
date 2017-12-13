import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class Contact extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <p>hello contact</p>
      <div className="contact">
        <img src=`${contact.profile_picture}` alt='contact picture'/>
        <h3>{contact.name}</h3>
        <h4>{contact.email}</h4>
      </div>
    )
  }
}

export default Contact
