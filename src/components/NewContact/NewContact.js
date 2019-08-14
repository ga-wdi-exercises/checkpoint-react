import React, { Component } from 'react'


class NewContact extends Component{
    render(){
        return(
            <div>
                <h1>New Contact</h1>
                <form action="">
                    <input name = 'name'type="text"/>
                    <input name = 'email' type="text"/>
                    <input name= 'profile_picture'type="text"/>
                </form>
            </div>
        )
    }
}

export default NewContact