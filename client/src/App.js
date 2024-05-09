import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo.js';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Todos} />
        <Route path="/add" component={AddTodo} />
        <Route path="/edit/:id" component={EditTodo} />
      </div>
    </Router>
  );
}

export default App;
