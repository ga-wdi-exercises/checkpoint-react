import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.props.handleSubmit}>
          <label>Name</label>
          <input type="text" onChange={this.props.handleChangeName} />
          <label>Email</label>
          <input type="text" onChange={this.props.handleChangeEmail} />
          <label>Url</label>
          <input type="text" onChange={this.props.handleChangeUrl} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default NewContact;
