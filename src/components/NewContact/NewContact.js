import React, { Component } from 'react'

class NewContact extends Component {
 render () {
   return (

     <div>
       <h2>New contact</h2>
       <input type='name' placeholder='name' required />
       <br />
       <input type='email' placeholder='email' required />
       <br />
       <input type='profile_picture' placeholder='Profile_picture' required />
       <br />
       <input type='submit' value='Submit' onClick={this.props.AddContacts} />
     </div>
   )
 }
}

export default NewContact
