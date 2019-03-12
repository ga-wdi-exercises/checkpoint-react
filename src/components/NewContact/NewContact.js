import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      name: undefined,
      profile_picture: undefined,
      redirect: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    e.preventDefault();
  }

  handleSubmit(e) {
    this.props.addContact(this.state);
    this.setState({
      redirect: true
    });
    e.preventDefault();
  }


  render() {

    const {redirect} = this.state;
    if(redirect){
      return (<Redirect to="/" />);
    }

    return (
      <div>
        <h1>New Contact</h1>

        <div>
          <div>
            <form>
              <div>
                <div>
                  <input name="name" id="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div>
                <div>
                  <input name="email" id="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div>
                <div>
                  <input name="profile_picture" id="profile_picture" type="text" value={this.state.profile_picture} onChange={this.handleInputChange} />
                  <label htmlFor="profile_picture">Profile Picture</label>
                </div>
              </div>
              <button type="submit" name="action" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewContact;