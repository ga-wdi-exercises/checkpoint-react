import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NewContact extends Component {


    render() {
        return (
            <div  className="contact">
                <img src={Contact.img}/>
                <h3>name</h3>
                <h4>email</h4>
            
            </div>
        )
    }

}

export default NewContact; 


