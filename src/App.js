import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
      <ChatEngine
			height='100vh'
			userName='olivia'
			userSecret='thankyou'
			projectID='98816256-be79-4584-8848-480757fe7fcb'
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		  />
  );
}

export default App;
