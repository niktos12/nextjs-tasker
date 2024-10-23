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
  status: "Новая" | "В Работе" | "Готова" | "Отложено";
}

interface EditTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
  task: Task;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  task,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [complexity, setComplexity] = useState(task.complexity);
  const [priority, setPriority] = useState(task.priority);
  const [startDate, setStartDate] = useState(task.startDate);
  const [endDate, setEndDate] = useState(task.endDate);

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
    if (!title || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const updatedTask: Task = {
      ...task,
      title,
      description,
      complexity,
      priority,
      startDate,
      endDate,
    };

    onSubmit(updatedTask);
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-black">Edit Task</h2>
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
          Save Changes
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

export default EditTaskModal;
