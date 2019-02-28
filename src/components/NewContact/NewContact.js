import React, { Component } from 'react';

class NewContact extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      email: "",
      profile_picture: ""
    }
  }
  
  render() {
    return <div className="new-contact">
      	<h1>New Contact</h1>
        <form onSubmit={() => { this.props.addContact(this.state) } }>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={ this.state.name } 
			  onChange={ (e) => { this.setState({ name: e.target.value }) } } />
          </div>
    	  <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value={ this.state.email } 
			  onChange={ (e) => { this.setState({ email: e.target.value }) } } />
          </div>
    	  <div>
            <label for="profile_picture">Profile Picture:</label>
            <input type="profile_picture" id="profile_picture" name="profile_picture" value={ this.state.profile_picture } 
			  onChange={ (e) => { this.setState({ profile_picture: e.target.value }) } } />
          </div>
		  <button type="submit">Submit</button>
        </form>
      </div>;
  }
}

export default NewContact;