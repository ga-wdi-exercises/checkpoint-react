import React, { Component } from 'react';
import Header from  '../Header/Header'
import ContactList from  '../ContactList/ContactList'
import NewContact from  '../NewContact/NewContact'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }

  handleSubmit = (obj) => {
    let newArray = this.state.contacts;
    newArray.push(obj)
    this.setState({
      contacts: newArray,
    })

    // THIS THROWS AN ERROR "in contact list, this.props.contacts.map is not a function"
    // this.setState(prevSate => ({
    //   contacts: this.state.contacts.push(obj)
    // }))

    console.log(this.state.contacts)
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact render={(props) => <ContactList contacts={this.state.contacts} {...props}/>}/>
            <Route path="/new-contact" render={(props) => <NewContact handleSubmit={this.handleSubmit} {...props}/>}/>
          </Switch>
      </div>
    );
  }
}

export default App;