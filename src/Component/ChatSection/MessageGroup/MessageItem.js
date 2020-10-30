import React from 'react';
import './message.css';

function MessageItem({chats}) {

    console.log(chats);

    return (

         <div className="message-box">

          {chats.map(chat=>{
              return    <div className="message-container" key={chat.id}>

              <div className="person-container">
                  <div className="person">
                      <div className="person-img">
                          <img src={chat.image} alt="person-image" />
                      </div>
                      <div className="name-status">
                          <h3 className="name">{chat.name}</h3>
                          <h4 className="status">{chat.status}</h4>
                      </div>
                  </div>
  
                  <div className="time">
                      <h5 className="last-seen">{chat.lastseen}</h5>
                  </div>
              </div>
  
              <div className="message">
                  <p className='para'>{chat.description} </p>
              </div>
          </div>;
          })}
          
        </div>

    )
}

export default MessageItem;
