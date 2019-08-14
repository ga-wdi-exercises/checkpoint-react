import React, { Component } from "react";
import Contact from "../Contact/Contact.js";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount = () => {
    this.setState({ list: this.props.contacts });
  };
  render() {
    // console.log(this.state.list);
    // console.log(this.props);
    let contacts = this.state.list.forEach((contact, index) => {
      return (
        <div key={index}>
          <Contact contact={contact} />
        </div>
      );
    });
    return <div className="contact-list">{contacts}</div>;
  }
}

export default ContactList;
