// Just so you know, I decided to do this my own way because I had no idea what it was that
// the checkpoint was trying to ask me to do. So i just followed the steps from previous assignments we did
// and created the homepage. Obviously i failed the tests, but I think i did a decent job with the homepage.
// Was starting to work on the routes and links when we finished, given more time, I may have been able to finish.
// This checkpoint feels useless since they expect you to do this only one way, their way.

import React, { Component } from 'react';
import ContactData from "../App/ContactData/ContactData"
import styled from "styled-components"
import ContactList from "../ContactList/ContactList"
import {Route,Link} from "react-router-dom"


const ContactContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin: 25px auto;
width: 800px;
`

const Header = styled.header`
color: black;
float: right;
margin-top: 10px;
font-size: 24px;
`
// Not sure how to implement styling within a different element
const Name = styled.div`
font-size: 25px;
font-weight:bold;
text-align: center;
`

// Not sure how to implement styling within a different element
const Email = styled.div`
font-size: 20px;
font-weight:bold;
text-align: center;
`

const NavBar = styled.nav`
margin-top: 10px;
color: black;
height: 50px;
font-size: 36px;
font-weight: bold;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: ContactData
    }
  }
  render() {
    return (
      <div className="App">
        <Header>
          Home  New Contact
        </Header>
        <NavBar>
          Contacts                          
        </NavBar>

        <ContactContainer>
          {this.state.contacts.map((contact, index) => {
            return (
              <ContactList
                imgSrc={contact.profile_picture}
                imgAlt={contact.name}
                contactName={contact.name}
                contactEmail={contact.email}
                key={index}
              />
            )
          })}
        </ContactContainer>
        {/* Was working on links and routes, didn't get to finish, wanted you to see at least rendered home page */}
        {/* <Link to="/" />
        <Route /> */}
      </div>
    )
  }
}

export default App;