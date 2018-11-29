import React, { Component } from 'react'
import Contact from '../Contact/Contact'


class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <label>
                        Name
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Image
                        <input type="url" name="profile-picture" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewContact