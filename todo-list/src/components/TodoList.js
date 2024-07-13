import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, setEditingTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem 
          key={task.id}
          task={task}
          setEditingTask={setEditingTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
