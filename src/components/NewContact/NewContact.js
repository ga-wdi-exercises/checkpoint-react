import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.props.submitHandler}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.props.changeHandler}></input>
          <label>Email</label>
          <input type="text" name="email" onChange={this.props.changeHandler}></input>
          <label>Profile Picture</label>
          <input type="text" name="profile_picture" onChange={this.props.changeHandler}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default NewContact;