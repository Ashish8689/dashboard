import React from 'react';
import MessageItem from './MessageItem';

function MessageList() {

   const chats=[
        {
            id:1,
            name:"Ashish",
            image:'person.jpg',
            lastseen:"1 min ago",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et qui quo minima debitis enim praesentium natus placeat deserunt commodi enim praesentium natus placeat deserunt commodi.",
            status:"...write",
        },
        {
            id:2,
            name:"Shreya",
            image:'c2.jpeg',
            lastseen:"10 min ago",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et qui quo minima debitis enim praesentium natus placeat deserunt commodi enim praesentium natus placeat deserunt commodi.",
            status:"seen",
        },
        {
            id:3,
            name:"Aryan",
            image:'c1.jpeg',
            lastseen:"10 min ago",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et qui quo minima debitis enim praesentium natus placeat deserunt commodi enim praesentium natus placeat deserunt commodi.",
            status:"seen",
        },
        {
            id:4,
            name:"Aarya",
            image:'c2.jpeg',
            lastseen:"10 min ago",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et qui quo minima debitis enim praesentium natus placeat deserunt commodi enim praesentium natus placeat deserunt commodi.",
            status:"seen",
        },
        {
            id:5,
            name:"Sushant",
            image:'c1.jpeg',
            lastseen:"10 min ago",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et qui quo minima debitis enim praesentium natus placeat deserunt commodi enim praesentium natus placeat deserunt commodi.",
            status:"seen",
        },
        {
            id:6,
            name:"Sushant",
            image:'person.jpg',
            lastseen:"10 min ago",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et qui quo minima debitis enim praesentium natus placeat deserunt commodi enim praesentium natus placeat deserunt commodi.",
            status:"seen",
        }
  ];

    return (
        <>
          <MessageItem chats={chats}/>
        </>
    )
}

export default MessageList;
