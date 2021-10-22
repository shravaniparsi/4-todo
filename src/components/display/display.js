import "./display.css";
import PropTypes from 'prop-types';

const Display = props => {
  const items = props.items;
  const listOfItems = items.map((item,index) => {
    return (
      <div className="to-do-item" key="index">
        <div className="to-do-wrapper">
          <span className="text-item">{item}</span>
          <button
            className="delete-icon"
            onClick={() => {
              props.delete(item);
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  });
  return <div className="display">{listOfItems}</div>;
};

Display.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func.isRequired,
}

export default Display;
