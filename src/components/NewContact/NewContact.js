import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                <label>Name</label>
                    <input
                    type="text"
                    name="name">
                    </input>
                <label>Email</label>
                    <input
                    type="text"
                    name="email">
                    </input>
                <label>Image</label>
                    <input
                    type="text"
                    name="profile_picture">
                    </input>
                <button type="submit">Submit</button>
                </form>
                
            </div>
        );
    }
}

export default NewContact;