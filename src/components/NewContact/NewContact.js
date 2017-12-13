import React, { Component } from "react"

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Profile Picture" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewContact
