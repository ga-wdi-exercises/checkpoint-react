import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

class NewContact extends Component {
    constructor() {

    }

    render() {
        return (
            <div>

                <h1> New Contact</h1>
                <div>
                    <input type="name" />
                    <input type="email" />
                    <input type="image" />
                    <button type="submit" >Submit</button>
                </div>
            </div>
        )
    }
}

export default NewContact