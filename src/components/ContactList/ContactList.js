import React, {Component} from 'react'

import Contact from '../Contact/Contact'

class Contactlist extends Component {
	render() {
		let contacts = this.props.contacts.map((contact, index) => {
			return <Contact key={index} contact={contact} />
		})

		return <div className="contact-list">{contacts}</div>
	}
}

export default Contactlist
