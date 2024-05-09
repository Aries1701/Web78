import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    setTodos(res.data);
  };

  const completeTodo = async (id) => {
    const res = await axios.patch(`http://localhost:5000/todos/${id}`, { completed: true });
    setTodos(todos.map(todo => todo._id === id ? res.data : todo));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.title} - {todo.description}
            <button onClick={() => completeTodo(todo._id)}>Complete</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button><a href="/add">Add Todo</a></button>
    </div>
  );
}

export default Todos;
