import React from 'react'

const Contact = ({name, email, profile_picture}) => {
    return (
      <div className="contact">
        <img src={profile_picture} alt=""/>
        <h3>{ name }</h3>
        <h4>{ email }</h4>
      </div>
    )
  }

export default Contact;
