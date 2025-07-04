import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import DATA from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entryData, setEntryData] = useState(DATA);
  const [localColor, setLocalColor] = useState('green');
  const [remoteColor, setRemoteColor] = useState('blue');

  const LOCAL_SENDER = entryData[0].sender;
  const REMOTE_SENDER = entryData[1].sender;

  const handleColorChange = (sender, color) => {
    if (sender === LOCAL_SENDER){
      setLocalColor(color);
    } else if (sender === REMOTE_SENDER) {
      setRemoteColor(color);
    }
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
          <span className={localColor}>{LOCAL_SENDER}</span>{' '}
          and{' '}
          <span className={remoteColor}>{REMOTE_SENDER}</span>
        </h1>

        <section>
          <ColorChoice sender={LOCAL_SENDER} chatColor={localColor} setColorCallback={handleColorChange} />
          <span id='heartWidget' className='widget'>{totalLikes} ❤️s</span>
          <ColorChoice sender={REMOTE_SENDER} chatColor={remoteColor} setColorCallback={handleColorChange} />
        </section>
      </header>

      <main>
        <ChatLog
          entries={entryData}
          onToggleHeart={updateEntryLikedState}
          chatLocalColor={localColor}
          chatRemoteColor={remoteColor}
          localSender={LOCAL_SENDER}
        />
      </main>
    </div>
  );
};

export default App;
