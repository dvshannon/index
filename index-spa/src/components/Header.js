import React from 'react';

function Header() {
    return (
        <div className="header">
            <h1>Index</h1>
            <h1>Your books saved.</h1>
            <nav className='navbar'>
                <a href="/">Search</a>
                <a href="/saved">Saved</a>
            </nav>
        </div>
    )
}

export default Header;