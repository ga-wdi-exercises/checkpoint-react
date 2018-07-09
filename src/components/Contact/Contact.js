import React, { Conponent } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
            <title>Profile Pictures</title>
            <img src={this.this.props.profile_picture} />
            <h2>{this.props.email}</h2>
            <h3>{this.props.email}</h3>
            </div>
        );
    }
}

export default Contact;