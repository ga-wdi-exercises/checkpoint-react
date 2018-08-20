import React, { Component } from 'react'

class NewContact extends Component{
    render(){
        return(
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="name" placeholder="Name" /> <br />
                    <input type="email" placeholder="Email" /> <br />
                    <input type="profile_picture" placeholder="Link to profile picture" /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewContact
