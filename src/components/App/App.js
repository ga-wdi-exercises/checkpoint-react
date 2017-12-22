import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom"
import Header from "../Header/Header.js"
import NewContact from "../NewContact/NewContact.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: []
    }
  }

  render() {
    return <div className="App">
        <p>app</p>

        <div className="main">
                  <Switch>
                    <Route exact path="/" render={() => <Header />} />
                    <Route path="/new-contact" render={() => <Header />} />
                  </Switch>
                </div>
      </div>;
  }
}

export default App;
