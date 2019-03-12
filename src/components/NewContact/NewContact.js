import React, { Component } from 'react';

class NewContact extends Component {

    handleSubmit(evt) {
        evt.preventDefault();
        console.log("form submitted")
    }
    render() {
        return (
            <div>
               <h1>New Contact</h1>
               <form onSubmit={this.handleSubmit}>
        <p>
          <label>Name </label>
          <input id="name" name="name" type="text" />
          </p>
          <p>
          <label>Email </label>
          <input id="email" name="email" type="email" />
          </p>
          <p>
          <label>Profile Picture </label>
          <input id="profile_picture" name="profile_picture" type="file" />
          </p>
          <p>
          <button>Create Contact</button>
          </p>
        </form>
            </div>
        );
    }
}

export default NewContact;