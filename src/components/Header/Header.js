import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>
                        <Link to ='/'></Link>
                        <Link to ='/new-contact'></Link>
                    </h1>
                </header>
            </div>
        );
    }
}

export default Header;