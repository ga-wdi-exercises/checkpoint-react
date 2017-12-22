import React, { Component } from 'react'

class NewContact extends Component {
  constructor(){
    super()
    this.state = {
      newContact: {
        name: null,
        email: null,
        profile_picture: null
      }
    }
  }

  handleNameInput(e) {
    this.setState({
      newContact: {
        name: e.target.value
      }
    })
  }

  handleEmailInput(e) {
    this.setState({
      newContact: {
        email: e.target.value
      }
    })
  }

  handleImageInput(e) {
    this.setState({
      newContact: {
        profile_picture: e.target.value
      }
    })
  }

  handleNewSubmit(e) {
      let newContact = {this.state.newContact}
       this.props.contacts.push({newContact})
    }
    let contact = {this.state.newContact}
    super.props.contacts.push(contact)
  }


  render() {
    return(
      <div>
        <h2>Add New Contact</h2>
        <form onSubmit={(e) => this.handleNewSubmit(e)}>
          <p>
            <label>Name:</label>
            <textarea onChange={(e) => this.handleNameInput(e)}></textarea>
          </p>
          <p>
            <label>Email:</label>
            <textarea onChange={(e) => this.handleEmailInput(e)}></textarea>
          </p>
          <p>
            <label>Image:</label>
            <textarea onChange={(e) => this.handleImageInput(e)}></textarea>
          </p>
        <input type="submit" value="Add New"/>
        </form>
      </div>
    )
  }
}

export default NewContact
