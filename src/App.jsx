import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import DATA from './data/messages.json';
import { useState } from 'react';


const App = () => {
  const [entryData, setEntryData] = useState(DATA);
  // const firstMsgData = DATA[0];

  const updateEntryLikedState = (entryId) => {
    setEntryData(entries => {
      return entries.map(entry => {
        if (entry.id === entryId) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      });
    });
  };

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
        <ChatLog
          entries={entryData}
          onToggleHeart={updateEntryLikedState}
        />
      </main>
    </div>
  );
};

export default App;
