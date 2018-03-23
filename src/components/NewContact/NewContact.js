import React, { Component } from 'react'

class NewContact extends Component {
  render () {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type='text' name='name' placeholder='name' onChange={(e) => this.props.onChange(e)} />
          <input type='text' name='email' placeholder='email' onChange={(e) => this.props.onChange(e)} />
          <input type='text' name='image' placeholder='image' onChange={(e) => this.props.onChange(e)} />
          <input type='submit' value='Add' onClick={(e) => this.props.onClick(e)} />
        </form>
      </div>
    )
  }
}

export default NewContact
