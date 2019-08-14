import React, { Component } from "react";

class NewContact extends Component {
    render() {
        return(
            <div>
                <h1>New Contact</h1>
                <form name="myForm">
                    Name: <input type="text" name="name"></input>
                    Email: <input type="text" name="email"></input>
                    Profile Pic: <input type="image" src="profile_picture" alt="Profile Pic"></input>
                </form>
            </div>
        );
    }
}

export default NewContact;