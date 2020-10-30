import React from 'react';
import FooterInput from './Footer/FooterInput';
import Header from './Header/Header';
import './singlemessage.css';

function SingleMessage() {
    return (
        <div className="single-message-box">
            <div className="top-single-section">
               <Header/>
            </div>

            <div className="middle-single-section">

            </div>
            <div className="bottom-single-section">
                <hr/>
               <FooterInput/>
            </div>
        </div>
    )
}

export default SingleMessage;
