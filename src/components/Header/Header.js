import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1></h1>
                <nav>
                    <Link to="/Home">
                </Link>
                <Link to="/new-contact"></Link>
                </nav>
            </div>
        )
    }

}

export default Header; 



