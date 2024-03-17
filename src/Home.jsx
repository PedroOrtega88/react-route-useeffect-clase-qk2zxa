import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Corregido el nombre del import

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const tasksFromAPI = [
        { id: 1, description: 'tarea 1' },
        { id: 2, description: 'tarea 2' },
        { id: 3, description: 'tarea 3' },
      ];
      setTasks(tasksFromAPI);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
