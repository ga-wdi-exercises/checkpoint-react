import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Contact extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div  className="contact">
                <img src={Contact.img}/>
                <h3>{Contact.name}</h3>
                <h4>{Contact.email}</h4>
               
            
            </div>
        )
    }

}

export default Contact; 


