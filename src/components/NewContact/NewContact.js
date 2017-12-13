import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div >
        <h1>New Contact</h1>
        <form onSubmit={(e) => this.props.submit(e)}>
          Name<br/>
          <input type="text" name="name"/><br/>
          Email<br/>
          <input type="email" name="email"/><br/>
          image<br/>
          <input type="text" name="image"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>

    )
  }
}

export default NewContact;
