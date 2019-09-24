import React, { Component } from 'react';
import {Route, Link, Switch} from "react-router-dom"


class NewContact extends Component {
    constructor(props) {
        super(props)

        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <input type="image" placeholder="profile_picture" />
                    <input type="Submit" value="Submit" onClick={this.handleSubmit} />
                </form>

            </div>


        )

    }
}


export default NewContact;