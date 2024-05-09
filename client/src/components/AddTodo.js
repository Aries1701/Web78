import React, { useState } from 'react';
import axios from 'axios';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description };
    const res = await axios.post('http://localhost:5000/todos', newTodo);
    window.location = '/';
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
