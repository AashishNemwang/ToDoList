import React, { useState, useEffect } from 'react';

function TodoForm({ addTask, editTask, editingTask, setEditingTask }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editingTask) {
      setInput(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      editTask(editingTask.id, input);
    } else {
      addTask(input);
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        required
      />
      <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
      {editingTask && <button type="button" onClick={() => setEditingTask(null)}>Cancel</button>}
    </form>
  );
}

export default TodoForm;
