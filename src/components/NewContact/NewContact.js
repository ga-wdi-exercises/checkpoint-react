import React from 'react'

class NewContact extends React.Component {
    render(){
        return(
            <div>
                <h1>New Contact</h1>
                <form>
                    <input name='name' placeholder= "name"></input>
                    <input name= "email" placeholder= "email"></input>
                    <input name='profile_picture' placeholder= "profile picture"></input>
                </form>
                <button>Submit</button>
            </div>
        )
    }
}

export default NewContact



// Your <NewContact> component should render:

// An <h1> with a text of New Contact
// A form with inputs for the name, email and profile_picture.
// When submitted, you should save the new contact by updating your state inside of <App> and redirect the user back to the homepage/list of contacts.