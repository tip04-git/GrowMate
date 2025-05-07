import React, { useState } from 'react';
import './TodoMaker.css';

const TodoMaker = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, done: false }]);
    setTask('');
  };

  const toggleTask = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const completedCount = todos.filter(t => t.done).length;
  const progress = todos.length ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="todo-container">
      <h2 className="todo-heading">🗒️ Plan Your Day</h2>

      <div className="todo-input-group">
        <input
          className="todo-input"
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="todo-add-btn" onClick={addTask}>Add</button>
      </div>

      <div className="todo-progress">
        <div className="todo-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <ul className="todo-list">
        {todos.map((t, index) => (
          <li
            key={index}
            className={`todo-item ${t.done ? 'done' : ''}`}
            onClick={() => toggleTask(index)}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoMaker;
