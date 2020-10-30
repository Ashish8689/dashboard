import React from 'react';
import './SideTab.css';

export default function SideTab() {
    return (
        
        <div className="side-menu">

            <div className="navbar">

                <div className="login-person">
                    <div className="img-container">
                        <img src={`${process.env.PUBLIC_URL}/person.jpg`} />
                    </div>
                        <h4 className="img-title">Ashish Gupta</h4>
                </div>
            

                <ul className="nav-item">
                    <li className="nav-link active"><i className="fas fa-home"></i>Home</li>
                    <li className="nav-link"><i className="fas fa-comment-dots"></i>Chat</li>
                    <li className="nav-link"><i className="far fa-user"></i> Contact</li>
                    <li className="nav-link"><i className="far fa-bell"></i>Notification</li>
                    <li className="nav-link"><i className="far fa-calendar-times"></i>Calendar</li>
                    <li className="nav-link"><i className="fas fa-cog"></i>Setting</li>
                </ul>      
            </div>

            <div className="logout-menu">
                <li className="nav-link"><i className="fas fa-power-off"></i>Logout</li>
            </div>

        </div>
    )
}
