import "./input.css";
import Display from "./../display/display";
import React, { useState, useRef, useEffect } from "react";

const Input = () => {
  const textInput = useRef(null);
  
  useEffect(() => {
    textInput.current.focus();
  }, []);
  

  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = textInput.current.value;
    if(!newItem) {
        alert('enter text!')
        return;
    }
    setItems(items.concat(newItem));
    textInput.current.value = "";
    textInput.current.focus();
  };

  const clearAll = () => {
    setItems([]);
  };

  const deleteItem = item => {
    setItems(items.filter(e => e !== item));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
  }

  return (
    <div className="card">
      <div className="input-wrapper">
        <h1>To do list</h1>
        <div className="form">
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="eg: Plan holiday"
            ref={textInput}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => addItem()}>submit</button>
        </div>
      </div>
      <Display items={items} delete={deleteItem}></Display>
      {items.length > 0 ? (
        <button className="clear-items" onClick={clearAll}>
          Clear all
        </button>
      ) : null}
    </div>
  );
};

export default Input;
