import React, { Component } from 'react'

class NewContact extends Component{
  constructor(props){
    super(props)

    this.state={
      name:'',
      email:'',
      profile_picture: ''
    }

    this.handleNameInput=this.handleNameInput.bind(this)
    this.handleEmailInput=this.handleEmailInput.bind(this)
    this.handleProfPicInput=this.handleProfPicInput.bind(this)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
  }

  handleNameInput(e){
    this.setState(
      name: e.target.value
    )
  }

  handleEmailInput(e){
    this.setState(
      email: e.target.value
    )
  }

  handleProfPicInput(e){
    this.setState(
      profile_picture: e.target.value
    )
  }

  handleFormSubmit(e){
    e.preventDefault
    let NewContact={
      name: this.state.name,
      email: this.state.email,
      profile_picture: this.state.profile_picture
    }
  }


  render(){
    return(
      <div>
      <h1>New Contact</h1>
      <form onSubmit={this.handleFormSubmit}>
        <input type='text' value='name' />
        <input type='text' value='email' />
        <input type='text' value='link to image' />
      </form>
    </div>
    

    )
  }
}
