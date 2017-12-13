import React, { Component } from 'react'
import '../../styles/index.css'



class NewContact extends Component {
  constructor(props) {
    super(props)
    // initialize state
  }
  render() {

    return(
      <div>
        <h1>New Contact</h1>
        <form onSubmit={(e) => this.props.onSubmitForm(e)}>
          <label>
            <input
              name="name"
              type="text"
              placeholder="name"
              onChange={this.props.handleInputChange} />
          </label>
          <label>
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={this.props.handleInputChange} />
          </label>
          <label>
            <input
              name="profile_picture"
              type="text"
              placeholder="profile_picture"
              onChange={this.props.handleInputChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default NewContact
