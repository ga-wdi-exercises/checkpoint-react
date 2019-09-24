import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1></h1>
                <nav>
                    <link to="/"/>
                    <link to="/new-contact"/>
                </nav>
                
            </div>
        )
    }
}



// class App extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         Header: props.header 
//       }
//     }
//     render() { 
//       return <div className="App">
//           <h1></h1>
//           <nav></nav>
//         </div>;
//     }
//   }
  