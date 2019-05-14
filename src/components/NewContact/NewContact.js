import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>

                <div className="searchBox">
           <input 
             type="text"
              placeholder="Name"
            //   onChange={this.didPay}
              />
              <input 
             type="text"
              placeholder="email"
            //   onChange={this.didPay}
              />
              <input 
             type="text"
              placeholder="profile_picture"
            //   onChange={this.didPay}
              />
            <button type="submit">Search</button>
        </div>
            </div>
        );
    }
}

export default NewContact;