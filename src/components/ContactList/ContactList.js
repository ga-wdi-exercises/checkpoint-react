import React, { Component } from "react";
import Contact from '../Contact/Contact'

// class ContactList extends Component {

//   render() {
//     let list = this.props.contacts.map(contact => {
//       return (
//         <div className="contact-list" key={contact.name}>
//         <Contact contacts={contacts}/>
//         </div>
//       );
//     });

//     return (
//       <div className='contact-list'>
//       {list}
//       </div>
//     )
// }
// }

class ContactList extends Component {
  render() {
    this.props.contacts.map(item => {
      return (
        <div key={item.name}>
          <p>
           {item.profile_picture}
           {item.name}
           {item.email}
          </p>
        </div>
      );
    });
  }
}

export default ContactList