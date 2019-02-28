import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input
                        type="text"
                        name="name" />
                    <input
                        type="text"
                        name="email"
                    />
                    <input
                        type="text"
                        name="profile_picture"
                    />
                </form>
            </div>
        );
    }
}

export default NewContact;

// Your < NewContact > component should render:

// An < h1 > with a text of New Contact
// A form with inputs for the name, email and profile_picture.
// When submitted, you should save the new contact by updating your state inside of < App > and redirect the user back to the homepage / list of contacts.

