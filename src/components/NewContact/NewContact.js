import React, {Component} from 'react'


exports default class NewContact extends Component {

  render() {
    return(
      <div>
        <h1>New Contact</h1>
        <form>
          <label>Name</label>
          <label>Email</label>
          <label>profile_picture</label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
