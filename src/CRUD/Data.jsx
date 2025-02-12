import { useState } from "react";

const Data = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const editItem = (index) => {
    setInput(items[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const updateItem = () => {
    if (input.trim()) {
      const updatedItems = [...items];
      updatedItems[currentIndex] = input;
      setItems(updatedItems);
      setInput("");
      setIsEditing(false);
      setCurrentIndex(null);
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Simple CRUD App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={isEditing ? updateItem : addItem}>
        {isEditing ? "Update" : "Add"}
      </button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item} <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Data;
