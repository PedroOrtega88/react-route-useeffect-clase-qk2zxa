import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    setTask({ id: id, description: 'Tarea de ejemplo' });
  }, [id]);

  return (
    <>
      {task && (
        <div>
          <h2>{task.description}</h2>
          <p>ID: {task.id}</p>
          <Link to="/">Volver a la home</Link>
        </div>
      )}
    </>
  );
}

export default TaskDetail;
