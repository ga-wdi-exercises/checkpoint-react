import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return(
            <div>
                <form>
                    <h1>New Contact</h1>
                    <input type="text" default="Name" />
                    <input type="text" default="Email" />
                    <input type="text" default="Profile Picture" />
                </form>
            </div>
        )
    }
}

export default NewContact