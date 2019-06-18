import React, { Component } from 'react';
import Contact from "../Contact/Contact"

class ContactList extends Component {
   constructor(props) {
      super(props)
      this.state = this.props.state
      }
    

   render() {
      console.log(this.props.state)
      let contacts = this.props.state.contacts.map((contact, index) => {
         return <Contact name={contact.name} email={contact.email} img={contact.profile_picture} key={index} />
      });

      return (
         <div className="contact-list">
            {contacts}
         </div>
      );
   }
}

export default ContactList;