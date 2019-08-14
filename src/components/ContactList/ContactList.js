import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"
import Contact from '../Contact/Contact';


class ContactList extends Component {
    
    render(props) {
        // console.log(this.props.ContactsData)
        let contactArray = []
    

      return (
          <div className="contact-list">
              {/* //this needs to repeat */}
              <Contact ContactsData={this.props.ContactsData}/>
          </div>
      );
    }
  }



export default ContactList;









// render() {
//     let birdArray = []
//     console.log(this.props)
  
//     for (let i = 0; i < 8; i++) {
//         let imageLink = BirdData[i].image
        
//         let homepage = BirdData[i].homepage
//         // console.log(imageLink)
//         birdArray.push( <HomeBird homepage={homepage} imageLink={imageLink} key={i} onClick={() => this.handleClick}/>)  
//     }
//     console.log(BirdData);
//     return (
  
  
       
       
//             <div>
//             {/* <h2 className="homeBirdsLabel">Birds</h2> */}
//             {/* <p className="homeAddNewBirdButton">(Add a new bird)</p> */}
//             <nav >
            
//             </nav>
//             <div className="homeBirdContainer">
//             {birdArray}
  
//             </div>
//             {/* <Show /> */}
  
//         </div>
       