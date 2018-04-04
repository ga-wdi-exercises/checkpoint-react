import React, { Component } from 'react'
import Contact from '../Contacts/Contact/'
import ContactList from '../ContactList/ContactList/'
import Header from '../Header/Header/'
import NewContact from '../NewContacts/NewContacts/'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contacts: this.props.contacts
		}
	}
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={ContactList} />
						<Route path="/new-contact" component={NewContact} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
