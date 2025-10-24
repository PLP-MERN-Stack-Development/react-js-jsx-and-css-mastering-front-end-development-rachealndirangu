import { useState, useEffect } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="border rounded px-3 py-2 flex-grow"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center mb-2"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
