import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class ContactList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  componentDidMount(){
    console.log("Contact list props: ", this.props);
  }

  render() {
    let contactComponents;
    contactComponents = this.props.contacts.map((contact, id) => {
      return <Contact contact={contact} key={id} />
    })
    console.log("Contact components: ", contactComponents);

    return (
      <div className="contact-list">
        <div>
          {contactComponents}
        </div>
      </div>
    );
  }
}

export default ContactList;