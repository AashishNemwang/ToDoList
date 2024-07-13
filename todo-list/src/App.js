import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm 
          addTask={addTask}
          editTask={editTask}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
        <TodoList 
          tasks={tasks}
          setEditingTask={setEditingTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
