import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contacts: this.props.contacts
		}
		this.addNewContact = this.addNewContact.bind(this)
	}
	addNewContact(contact) {
		this.setState({
			contacts: [...this.state.contacts, contact]
		})
	}
	render() {
		return (
			<div className="App">
				<header>
					<h1> Contacts </h1>
					<Link to="/"> Home </Link>
					<Link to="/new-contact"> New Contact </Link>
				</header>
				<main>
					<Switch>
						<Route
							exact
							path="/"
							render={() => <ContactList contacts={this.state.contacts} />}
						/>

						<Route
							path="/new-contact"
							render={props => (
								<NewContact addNewContact={this.addNewContact} {...props} />
							)}
						/>

						<Route path="/*" render={() => <Redirect to="/" />} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App
