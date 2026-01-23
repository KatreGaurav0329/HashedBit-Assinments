import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    const updatedTasks = [...tasks, task.trim()].sort((a, b) =>
      a.localeCompare(b)
    );

    setTasks(updatedTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div>
      <h2>Create a Todo List app</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={addTask} disabled={!task.trim()}>
        Add
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
