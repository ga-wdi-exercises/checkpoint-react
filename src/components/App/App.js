import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"
import Header from "../Header/Header"

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
        <Switch>
          <Route
            path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
          <Route path="/new-contact" render={() => <NewContact />} />
        </Switch>
      </div>
    )
  }
}

export default App
