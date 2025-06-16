import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import DATA from './data/messages.json';
import { useState } from 'react';

const colorDataArr = [
  {
    id: 'local',
    name: DATA[0].sender,
    chatColor: 'green',
  },
  {
    id: 'remote',
    name: DATA[1].sender,
    chatColor: 'blue',
  }
];

const App = () => {
  // const firstMsgData = DATA[0];
  const [entryData, setEntryData] = useState(DATA);
  const [colorData, setColorData] = useState(colorDataArr);

  const localSender = entryData[0].sender;
  const remoteSender = entryData[1].sender;

  const handleColorChange = (senderId, color) => {
    setColorData(senders => {
      return senders.map(sender => {
        if (sender.id === senderId) {
          return { ...sender, chatColor: color };
        } else {
          return sender;
        }
      });
    });
  };

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

  const totalLikes = entryData.reduce((sum, entry) => {
    return entry.liked ? sum + 1 : sum;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Chat Between{' '}
          <span className={colorData[0].chatColor}>{localSender}</span>{' '}
          and{' '}
          <span className={colorData[1].chatColor}>{remoteSender}</span>
        </h1>
        <section>
          <ColorChoice senderData={colorData[0]} setColorCallback={handleColorChange} />
          <span id='heartWidget' className='widget'>{totalLikes} ❤️s</span>
          <ColorChoice senderData={colorData[1]} setColorCallback={handleColorChange} />
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
          colorData={colorData}
          onToggleHeart={updateEntryLikedState}
        />
      </main>
    </div>
  );
};

export default App;
