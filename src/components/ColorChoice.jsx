import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = ({sender, chatColor, setColorCallback}) => {
  const handleColorChange = (event) => {
    setColorCallback(sender, event.target.value);
  };

  return (
    <label className={chatColor}>
      {sender}&apos;s color:
      <select name="colorSelect" defaultValue="chooseColor" onChange={handleColorChange}>
        <option value="">Choose a color</option>
        <option value="red" >🔴 Red</option>
        <option value="orange">🟠 Orange</option>
        <option value="brown">🟤 Brown</option>
        <option value="green">🟢 Green</option>
        <option value="blue">🔵 Blue</option>
        <option value="purple">🟣 Purple</option>
      </select>
    </label>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  chatColor: PropTypes.string.isRequired,
  setColorCallback: PropTypes.func.isRequired
};
export default ColorChoice;