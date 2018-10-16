import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input name="title" type="text"/>
          <input name="name" type="text"/>
          <input name="email" type="text"/>
          <input name="profile_picture" type="text"/>
          <input name="image" type="text"/>
        </form>
      </div>
    );
  }
}

export default NewContact;