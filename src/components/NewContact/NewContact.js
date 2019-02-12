import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input>name</input>
          <input>email</input>
          <input>profile_picture</input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default NewContact;