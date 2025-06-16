import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onToggleHeart, chatLocalColor, chatRemoteColor, localSender}) => {
  const chatEntryComponents = entries.map((entry) => {
    const isLocal = entry.sender === localSender;
    const chatColor = isLocal ? chatLocalColor : chatRemoteColor;
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onToggleLike={onToggleHeart}
        isLocal={isLocal}
        chatColor={chatColor}
      ></ChatEntry>
    );
  });

  return (
    <div className='chat-log'>
      {chatEntryComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onToggleHeart: PropTypes.func.isRequired,
  chatLocalColor: PropTypes.string.isRequired,
  chatRemoteColor: PropTypes.string.isRequired,
  localSender: PropTypes.string.isRequired
};

export default ChatLog;