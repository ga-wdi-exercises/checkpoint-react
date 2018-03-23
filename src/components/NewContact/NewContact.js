import React, { Component } from 'react'

// Your <NewContact> component should render an <h1>
//  with a text of New Contact and a form with inputs
// for the name, email and profile_picture.

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Image</label>
            <input type="url" name="profile_picture" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewContact
