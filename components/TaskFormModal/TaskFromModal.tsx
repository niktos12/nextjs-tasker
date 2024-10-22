import React, { useState } from "react";
import ReactDOM from "react-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  complexity: string;
  priority: string;
  startDate: string;
  endDate: string;
  status: "Новая" | "В Работе" | "Готова" | "Отложена";
}

interface TaskFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
}

const TaskFormModal: React.FC<TaskFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complexity, setComplexity] = useState("Низкая");
  const [priority, setPriority] = useState("Низкий");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      complexity,
      priority,
      startDate,
      endDate,
      status: "Новая", // Статус по умолчанию для новой задачи
    };

    onSubmit(newTask);
    onClose();
    setTitle("");
    setDescription("");
    setComplexity("Низкая");
    setPriority("Низкий");
    setStartDate("");
    setEndDate("");
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Высокая":
        return "bg-red-500";
      case "Средняя":
        return "bg-orange-500";
      case "Низкая":
        return "bg-green-500";
      default:
        return "bg-red-500";
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Add click handler to the background
    >
      <div
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
      >
        <h2 className="text-2xl font-bold mb-4 text-black">Create Task</h2>
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

        <div className="mb-4">
          <p className="text-black">Сложность:</p>
          <div className="flex items-center space-x-2 mt-2">
            <div
              className={`w-3 h-3 rounded-full ${getComplexityColor(
                complexity
              )}`}
            ></div>
            <select
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
              className="select select-bordered w-full text-black"
            >
              <option value="Высокая">Высокая</option>
              <option value="Средняя">Средняя</option>
              <option value="Низкая">Низкая</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-black">Приоритет:</p>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select select-bordered w-full text-black"
          >
            <option value="Высокий">Высокий</option>
            <option value="Средний">Средний</option>
            <option value="Низкий">Низкий</option>
          </select>
        </div>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input input-bordered w-full mb-4 text-black"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input input-bordered w-full mb-4 text-black"
        />

        <button
          onClick={handleSubmit}
          className="btn btn-primary w-full mb-2 text-black"
        >
          Create Task
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