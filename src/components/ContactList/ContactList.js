import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {

    constructor (props) {
        super(props)
        this.state = {
         contact: ''
        }
        this.showContact = this.showContact.bind(this)
      }

showContact=()=> {
    this.props.contacts.map (item=> {
        this.setState({contact:item})
    })
}

    render() {
        // {this.showContact}
        console.log("in contactlist render" + this.props.contacts)
        console.log("in contact list render" + this.state.contact)
       
        let list = this.props.contacts.map (item => {
            
            return (
                <div>
                    < Contact contact={this.state.contact} />
                </div>
            )
        })
        return (
            <div className="contact-list">
                {list}
            </div>
        );
    }
}

export default ContactList;