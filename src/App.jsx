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

  //////////////////////////
  // CALCULATE TOTAL LIKES//
  /////////////////////////
  // let totalLikes = 0;
  // for (const entry of entryData) {
  //   if (entry.liked) {
  //     totalLikes += 1;
  //   }
  // }
  const totalLikes = entryData.reduce((sum, entry) => {
    return entry.liked ? sum + 1 : sum;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Chat Between {entryData[0].sender} and {entryData[1].sender} </h1>
        <section>
          <span id='heartWidget' className='widget'>{totalLikes} ❤️s</span>
        </section>
      </header>
      <main>
        {/* Display Single Msg - WAVE 1
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
