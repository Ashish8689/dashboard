import React from 'react';
import Header from './Header/Header';
import InputBar from './Input/InputBar';
import MessageList from './MessageGroup/MessageList';

function Chat() {
    return (
        <div>
            <Header/>
            <InputBar/>
            <MessageList/>
        </div>
    )
}

export default Chat;
