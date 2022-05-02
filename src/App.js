import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
			height='100vh'
			userName='ava'
			userSecret='hello'
			projectID='46a280f0-3668-4d8e-a4cf-1c5438278369'
		/>
    </div>
  );
}

export default App;
