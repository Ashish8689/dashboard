import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="single-header">

            <div className="personal-details">
                <img src={`${process.env.PUBLIC_URL}/person.jpg`} />
                <div className="personal-desc">
                    <h4>Ashish</h4>
                    <h6>Last online 6 hrs ago</h6>
                </div>
            </div>

            <div className="toggle">
                <button className="toggle-button"><i class="fas fa-paperclip"></i></button>
                <button className="toggle-button"><i className="fas fa-ellipsis-v"></i></button>
            </div>
        </div>
    )
}

export default Header
