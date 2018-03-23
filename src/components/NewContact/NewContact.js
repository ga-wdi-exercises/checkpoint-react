import React, { Component } from 'react';

class NewContact extends Component {
   render() {
      return (
         <div>
            <h1>New Contact</h1>
            <form>
               <label>Name</label><input type='text' ref='name' />
               <br/>
               <label>Email</label><input type='text' ref='email' />
               <br/>
               <label>Image</label><input type='text' ref='profile-picture' />
               <br/>
               <input type='submit' />
            </form>
         </div>
      );
   }
}

export default NewContact;