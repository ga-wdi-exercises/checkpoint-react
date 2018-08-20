import React, { Component } from 'react';
import Contact from  '../Contact/Contact'
import contacts from '../../contacts.json'


class ContactList extends Component {
    constructor(props){
        super(props)
        this.state = {
            contacts: []
        }
    }
    componentDidMount(){
        fetch(contacts)
        .then(res => {
            res.json()
        })
        .then(res => {
            console.log(res)
            this.setState({
                contacts: res
            })
        }
        )

        }
    
    render(){
        var showContacts = this.state.contacts.map((contact, i) => {
            return (
                <div key={i}>
                    <Contact data={contact}/>
                </div>
            )
        })
        return(
            <div className="contact-list">
                <h1>Contacts</h1>
                {showContacts}
            </div>
        )
    }
}

export default ContactList