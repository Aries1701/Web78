const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/fullstack', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON request bodies
app.use(express.json());

// API endpoint to create a new todo
app.post('/todos', async (req, res) => {
  const todo = new Todo(req.body);

  try {
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// API endpoint to get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoint to get a todo by id
app.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoint to update a todo by id
app.patch('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});// API endpoint to delete a todo by id
app.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
