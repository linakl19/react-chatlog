import './App.css';
import ChatEntry from './components/ChatEntry';
import messagesData from './data/messages.json';


const App = () => {
  const firstMsgData = messagesData[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={firstMsgData.sender}
          body={firstMsgData.body}
          timeStamp={firstMsgData.timeStamp}>
        </ChatEntry>
      </main>
    </div>
  );
};

export default App;
