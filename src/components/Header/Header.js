import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>home
                </Link>
                    <Link to='/new-contact'>new contact
                </Link>
                    <header>
                        <h1>contacts</h1>
                    </header>
                </nav>
            </div>
        )
    }
}

export default Header