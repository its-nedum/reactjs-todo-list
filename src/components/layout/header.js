import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List App</h1>
            <Link style={linkStyle} to="/">Home</Link> | <link style={linkStyle} to="/about">About</link>
        </header>
    )
}

const headerStyle = {
   background: '#333',
   color: '#fff',
   textAlign: 'center',
   padding: '10px' 
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;