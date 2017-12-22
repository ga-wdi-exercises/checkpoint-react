import React, {Component} from 'react'


export default class Contact extends Component {

  render () {
    let contact = this.props.contact.map((contact, index) => {
      return (
        <div class="contact">
          <img src="${contact.profile_picture}" alt="{contact.name}"/>
          <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
        </div>
      )
    })
    return (
      <div>
        {contact}
      </div>
    )
  }
}
