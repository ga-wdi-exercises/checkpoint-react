import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import Contact from "../Contact/Contact.js"
import ContactList from "../ContactList/ContactList.js"
import Header from "../Header/Header.js"
import NewContact from "../NewContact/NewContact.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: [
        {
          "name": "Bugs Bunny",
          "email": "bugs@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/1/17/Bugs_Bunny.svg"
        }, {
          "name": "Daffy Duck",
          "email": "daffy@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/f/f4/Daffy_Duck.svg"
        }, {
          "name": "Porky Pig",
          "email": "porky@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/8/88/Porky_Pig.svg"
        }, {
          "name": "Elmer Fudd",
          "email": "fudd@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/6/66/ElmerFudd.gif"
        }, {
          "name": "Sylvester",
          "email": "sylvester@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/8/82/Sylvester_the_Cat.svg"
        }, {
          "name": "Yosemite Sam",
          "email": "yosemite@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/2/2d/Yosemite_Sam.svg"
        }, {
          "name": "Foghorn Leghorn",
          "email": "foghorn@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png"
        }, {
          "name": "Marvin the Martian",
          "email": "marvin@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/d/d5/Marvin_the_Martian.svg"
        }, {
          "name": "Pepé Le Pew",
          "email": "lepew@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/9/9a/Pep%C3%A9_Le_Pew.svg"
        }, {
          "name": "Speedy Gonzales",
          "email": "speedy@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/f/fe/Speedy_Gonzales.svg"
        }, {
          "name": "Tasmanian Devil",
          "email": "tasmanian@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/c/c4/Taz-Looney_Tunes.svg"
        }, {
          "name": "Road Runnery",
          "email": "runner@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/e/ee/Roadrunner_looney_tunes.png"
        }, {
          "name": "Wile E. Cayote",
          "email": "wile_e@gmail.com",
          "profile_picture": "https://upload.wikimedia.org/wikipedia/en/3/3c/Wile_E._Coyote.svg"
        }
      ]
    }
  }

  render() {
    return(
    <Router>
          <div>
            <nav>
              <h1>Contact List</h1>
              <Link to="/Home">Home</Link>
              <Link to="/new-contact">Add New</Link>
            </nav>
            <main>
              <Switch>
                <Route
                  exact path="/Home"
                  render={() => {
                    return (
                      <ContactList
                        contacts={this.state.contacts}
                      />
                    )
                  }}
                />
                <Route
                  path="/new-contact"
                  render={() => {
                    return (
                      <NewContact
                      />
                    )
                  }}
                />
                </Switch>
              </main>
            </div>
          </Router>
        )
    }
  }

export default App;
