import React, { Component } from 'react';

class NewContact extnds Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <from>
                    <input type='text' name='name' placeholder='name' />
                    <input type='text' name= 'email' placeholder='email' />
                    <input
                        type='url'
                        name='profile_picture'
                        placeholder='profile_picture'
                    />
                </from>
                <input type='submit' />
            </div>
        );
    }
}

export default NewContact;