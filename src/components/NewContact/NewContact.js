import React, {Component} from 'react'


export default class NewContact extends Component {

  onSubmitForm(e) {
    e.preventDefault()
    this.setState({

    })
  }

  render () {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.props.onSubmitForm}>
          <input type='text' name="name" placeholder='Name' />
          <input type='text' name="email" placeholder='Email' />
          <input type='text' name="profile_picture" placeholder='Profile Picture' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
