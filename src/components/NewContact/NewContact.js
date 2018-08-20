import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return(
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" id="name" />
                    <input type="email" id="email" />
                    <input type="text" id="profile_picture" />
                </form>
            </div>
        )
    }
}

export default NewContact