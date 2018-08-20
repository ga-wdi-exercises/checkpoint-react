import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'

class Contact extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        
        return (
            <div className="contact">
                <img src="#" alt="" />
                <h3>Name</h3>
                <h4>Email</h4>

            </div>
        )
    }


}

export default Contact

{/* <img src={contact.profile_picture} alt="" />
                <h3>{contact.name}</h3>
                <h4>{contact.email}</h4> */}