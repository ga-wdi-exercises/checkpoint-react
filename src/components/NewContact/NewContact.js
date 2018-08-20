import React, {Component} from 'react'

class NewContact extends Component {
  constructor(props){
    super(props)

  }
  submit(e){
    e.preventDefault()
    let {name, email, profile_picture} = e.target.value

    this.props.addContact({
      name: name.value,
      email: email.value,
      profile_picture: profile_picture.value
    })
  }

  render() {
    return(
      <div>
      <h1>New Contact</h1>
      <form onSubmit={this.submit}>
      <label>Name</label>
      <input type = "text" name = "name"/>
      <label>Email</label>
      <input type = "email" name = "email"/>
      <label>Image</label>
      <input type = "text" name = "profile_picture"/>
      <input type = "submit"/>
      </form>
      </div>

    )
  }


}


export default NewContact
