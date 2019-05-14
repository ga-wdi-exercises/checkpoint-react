import React, { Component } from 'react';

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactList: []
        }

    }

    componentDidMount() {
        fetch('../contacts.json')
            .then((res) => {
                return res.json()
            })
            .then((contactList) => {
                this.setState({
                    contactList
                })
            })
    }

    render() {
        return (
            <div class="contact-list">
                <Contact />
            </div>
        );
    }
}

export default ContactList