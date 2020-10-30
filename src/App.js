import React from 'react';
import './App.css';
import SideTab from  './Component/SideTab/SideTab';
import Chat from './Component/ChatSection/Chat';
import SingleMessage from './Component/SingleMessage/SingleMessage';


function App() {
  return (
    <div className="App">
          <div className="left-section">
              <SideTab />
          </div>

          <div className="middle-section">
              <Chat/>
          </div>

          <div className="last-section">
              <SingleMessage/>
          </div>
    </div>
  );
}

export default App;
