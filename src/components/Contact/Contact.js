import React from 'react'

const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <img src={contact.profile_picture} />
      <h3>{contact.name}</h3>
      <h4>{contact.email}</h4>
    </div>
  )
}

export default Contact
