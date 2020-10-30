import React from 'react';
import './footer.css';

function FooterInput() {
    return (
        <div className="footer">
            <button className="multi-select"><i className="fas fa-plus"></i></button>
            <input type="text" placeholder="Type a Message" />
            <button className="send"><i class="fas fa-paper-plane"></i></button>
        </div>
    )
}

export default FooterInput
