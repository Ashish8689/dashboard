import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header">
            <h3>Chats</h3>
            <button><i className="fas fa-plus"></i> Create New Chat</button>
        </div>
    )
}

export default Header
