import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';


const App = () => {
  // const firstMsgData = messagesData[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Display Single Msg - Wave 1
        <ChatEntry
          sender={firstMsgData.sender}
          body={firstMsgData.body}
          timeStamp={firstMsgData.timeStamp}>
        </ChatEntry>
        */}
        <ChatLog entries={messagesData} />
      </main>
    </div>
  );
};

export default App;
