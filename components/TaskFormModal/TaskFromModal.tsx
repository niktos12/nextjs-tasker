import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  complexity: string;
  priority: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface TaskFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
  task?: Task;
}

const TaskFormModal: React.FC<TaskFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  task,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complexity, setComplexity] = useState("low");
  const [priority, setPriority] = useState("low");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setComplexity(task.complexity);
      setPriority(task.priority);
      setStartDate(task.startDate);
      setEndDate(task.endDate);
    }
  }, [task]);

  const handleSubmit = () => {
    const newTask = {
      id: task ? task.id : Date.now(),
      title,
      description,
      complexity,
      priority,
      startDate,
      endDate,
      status: "Pending",
    };
    onSubmit(newTask);
    setTitle("");
    setDescription("");
    setComplexity("low");
    setPriority("low");
    setStartDate("");
    setEndDate("");
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {task ? "Edit Task" : "Create Task"}
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full mb-4 text-black"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full mb-4 text-black"
        />
        <select
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="select select-bordered w-full mb-4 text-black"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="select select-bordered w-full mb-4 text-black"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input input-bordered w-full mb-4 text-black"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input input-bordered w-full mb-4 text-black"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-full mb-2 text-black"
        >
          {task ? "Update Task" : "Create Task"}
        </button>
        <button
          onClick={onClose}
          className="btn btn-secondary w-full text-black"
        >
          Cancel
        </button>
      </div>
    </div>,
    document.body
  );
};

export default TaskFormModal;
