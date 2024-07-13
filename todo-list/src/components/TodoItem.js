import React from 'react';

function TodoItem({ task, setEditingTask, deleteTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => setEditingTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
