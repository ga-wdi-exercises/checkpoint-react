import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return <div className="contact-list">
        <form>
        <input type="name" placeholder="name"></input>
        <input type="exmail" placeholder="email"></input>
        <input type="image" id="img"></input>
        
        <h3>Test</h3>
        <h4>SmallerTest</h4>
        </form>
      </div>;
  }
}

export default ContactList;