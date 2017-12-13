import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'


import Search from '../ContactList/ContactList.js'
import Results from '../NewContact/NewContact.js'


class App extends Component {

  constructor (props) {
      super(props)
      this.state = { contacts: contacts}
      }
    }

  render() {
    return <div className="App">
    <Header />
    <main>
    <Switch>

    <Route
              path='/'
              render={(props) => (
                <ContactList
                  {...props}
                  // setTranslation={ (data) => this.setTranslation(data) }
                />
              )}
            />


            <Route
              path='/new-contact'
              render={(props) => (
                <NewContact
                  // {...props}
                  // setTranslation={ (data) => this.setTranslation(data) }
                />
              )}
            />



    </Switch>
    </main>

      </div>;
  }
}

export default App;
