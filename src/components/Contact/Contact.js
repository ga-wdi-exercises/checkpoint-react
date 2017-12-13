import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'


class Contact extends Component {


  render() {


    let contacts = this.props.contacts.map(contact, index) => {
			return (
				<div className="contact" key={index}>

          <img src={contact.profile_picture} alt={contact.name} className="Results_item_image" />
          <h3> {contact.name} </h3>
          <h4> {contact.email} </h4>

				</div>
			)
		})

    return (
        <div>

        {contacts}

        </div>
    )
  }
}

export default Contact
