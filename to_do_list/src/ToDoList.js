import React, { useState } from 'react';

function ToDoList() {
  
  const [toDoItems, setToDoItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItemObject = {
      id: toDoItems.length + 1,
      text: newItem,
      completed: false,
    };

    setToDoItems([...toDoItems, newItemObject]);
    setNewItem('');
  };

  //checkbox
  const handleCheckboxChange = (itemId) => {
    
    const updatedToDoItems = toDoItems.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );

    setToDoItems(updatedToDoItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedToDoItems = toDoItems.filter((item) => item.id !== itemId);
    setToDoItems(updatedToDoItems);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-item">New item:</label>
        <input
          id="new-item"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDoItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
