import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                {/* <img src={} /> */}
                <h3>{this.props.name}</h3>
                <h4>{this.props.email}</h4>
            </div>
        );
    }
}

export default Contact;

// render() {
//     const contact = this.props.contact.map(item => {
//         return (
//             <div className='contact'>
//                 <img />
//                 <h3>{item.name}</h3>
//                 <h4>{item.email}</h4>
//             </div>
//         );
//     });
//     return <div className="contact">{contact}</div>;
// }