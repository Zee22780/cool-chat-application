import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
			height='100vh'
			userName='olivia'
			userSecret='thankyou'
			projectID='98816256-be79-4584-8848-480757fe7fcb'
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		  />
    </div>
  );
}

export default App;
