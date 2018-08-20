import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'

class NewContact extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div>
                <h1>New Contact</h1>

                <form>
                    <input type="text" name='name'>Name</input>
                    <input type="text" name='email'>Email</input>
                    <input type="text" name='image'>Profile Picture</input>
                </form>
            </div>
        )
    }


}

export default NewContact