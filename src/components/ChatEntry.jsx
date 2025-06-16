import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleLike, isLocal, chatColor }) => {
  const entryClass = `chat-entry ${isLocal ? 'local' : 'remote'}`;

  return (
    <div className={entryClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={chatColor}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button
          className="like"
          onClick={() => { onToggleLike(id); }}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired,
  isLocal: PropTypes.bool.isRequired,
  chatColor: PropTypes.string.isRequired
};

export default ChatEntry;
