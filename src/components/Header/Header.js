import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header> 
                 
                        <Link to="/"><h1></h1></Link>
                        <Link to="/new-contact"><nav></nav></Link>

                        
                </header>
            </div>
        );
    }
}

export default Header;