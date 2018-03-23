import React, {Component} from 'react'

class NewContact extends Component {

  render() {
    return (
        <div>
            <h1>New Contact</h1>
            <form>
              <input type="name" name="name" placeholder="name"/>
              <input type="email" name="email" placeholder="email"/>
              <input type="profile_picture" name="profile_picture" placeholder="profile_picture"/>
            </form>
        </div>
    )
  }
}

export default NewContact;
