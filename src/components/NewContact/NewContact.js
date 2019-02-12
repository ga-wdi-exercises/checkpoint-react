import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
              <form>
              <h1>New Contact</h1>  
                <input type='text' name='name'/> Name  
                <input type='text' name='email'/> Email
                <input type='text' name='profile_picture'/> Image
            </form>
            <button type="submit" form="form" value="Submit">Submit</button>  
            </div>
        );
    }
}

export default NewContact;