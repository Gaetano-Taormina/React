import { useState } from 'react';

export default function InteractiveTodoList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (taskId) => {
    setTasks(tasks.map((t) => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className="card shadow-sm p-4 border-0">
      <h3 className="card-title text-center mb-1 fw-bold text-dark">Lista Attività</h3>
      <p className="text-muted text-center mb-4 small">Clicca su un elemento per completarlo o riattivarlo:</p>
      
      <div className="list-group">
        {tasks.map((task) => (
          <button
            key={task.id}
            type="button"
            onClick={() => toggleTask(task.id)}
            className={`list-group-item list-group-item-action d-flex align-items-center gap-3 p-3 ${
              task.completed ? 'list-group-item-success text-decoration-line-through text-muted' : ''
            }`}
          >
            <span className="fs-5">{task.completed ? '' : ''}</span>
            <span className="fw-medium flex-grow-1 text-start">{task.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
