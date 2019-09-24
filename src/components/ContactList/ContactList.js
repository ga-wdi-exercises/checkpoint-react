import React, {Component} from 'react'
import Contacts from '../Contact/Contact'

class ContactList extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Contacts>{this.props}</Contacts>
                <div className="contact-list"></div>
            </div>
        )
    }
}
export default ContactList