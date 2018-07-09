import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App/App'
// import { BrowserRouter as Router } from 'react-router-dom'

import contacts from './contacts.json'

let contactList
contactList = contacts.map((contact) => {
  return ({
    name: contact.name,
    email: contact.email,
    profile_picture: contact.profile_picture
  })
})

ReactDOM.render(<App contacts={contactList} />, document.getElementById('root'))
