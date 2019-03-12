import React, { Component } from 'react';

class NewContact extends Component {
    render(){
        return(
            <div>
            <h1>New Contact Page</h1>
            <form>
            <p>Name</p>
                <input type="text" />
            <p>Email</p>
                <input type="Email" />
            <p>Image</p>
                <input type="Image" />
            <button type="submit">Submit</button> 
            </form>
            </div>
        );
    }
}

export default NewContact;