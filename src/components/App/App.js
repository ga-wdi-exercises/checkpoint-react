import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import ContactList from '../ContactList/ContactList.js';
import NewContact from '../NewContact/NewContact.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: props.contacts
		};
		this.addContact = this.addContact.bind(this);
	}

	addContact(input) {
		let newContacts = this.state.contacts.concat([ input ]);
		console.log(newContacts);
		this.setState({ contacts: newContacts });
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return <ContactList {...this.state} />;
						}}
					/>
					<Route
						exact
						path="/new-contact"
						render={() => {
							return <NewContact addContact={this.addContact} />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
