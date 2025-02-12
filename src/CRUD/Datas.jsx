import { useState } from "react";

function Datas() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  function addItems() {
    setItems([...items, input]);
    setInput("");
  }

  function editItems(index) {
    setInput(items[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  }

  function updateItems() {
    const updatedItems = [...items];
    updatedItems[currentIndex] = input;
    setItems(updatedItems);
    setInput("");
    setIsEditing(false);
    setCurrentIndex(null);
  }

  function deleteItems(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={isEditing ? updateItems : addItems}>
        {isEditing ? "Update" : "Add"}
      </button>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              {item}
              <button onClick={() => editItems(i)}>Edit</button>
              <button onClick={() => deleteItems(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Datas;
