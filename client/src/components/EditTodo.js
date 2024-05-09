import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditTodo({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const res = await axios.get(`http://localhost:5000/todos/${match.params.id}`);
    setTitle(res.data.title);
    setDescription(res.data.description);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description };
    const res = await axios.patch(`http://localhost:5000/todos/${match.params.id}`, newTodo);
    window.location = '/';
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditTodo;
