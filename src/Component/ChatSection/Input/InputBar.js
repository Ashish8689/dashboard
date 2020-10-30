import React from 'react';
import './inputBar.css';

function InputBar() {
    return (
        <div className="input">
            <i className="fas fa-search"></i>    
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default InputBar;
