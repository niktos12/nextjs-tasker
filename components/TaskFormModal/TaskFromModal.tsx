import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddFile } from "../Icons/AddFile/AddFile";

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
  const [complexity, setComplexity] = useState("");
  const [priority, setPriority] = useState("");
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

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 text-black">Новая задача</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Название"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full text-black"
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full  text-black"
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="select w-full text-black bg-[#A1A1AA4D] text-[#18181B] font-semibold"
            >
              <option disabled value="" className="font-semibold">
                Приоритет
              </option>
              <option value="Высокий" className="font-semibold">
                Высокий
              </option>
              <option value="Средний" className="font-semibold">
                Средний
              </option>
              <option value="Низкий" className="font-semibold">
                Низкий
              </option>
            </select>
          </div>
          <div className="">
            <div className="flex items-center space-x-2">
              <select
                value={complexity}
                onChange={(e) => setComplexity(e.target.value)}
                className="select w-full text-black bg-[#A1A1AA4D] text-[#18181B] font-semibold"
              >
                <option disabled value="" className="font-semibold">
                  Сложность
                </option>
                <option value="Высокая" className="font-semibold">
                  Высокая
                </option>
                <option value="Средняя" className="font-semibold">
                  Средняя
                </option>
                <option value="Низкая" className="font-semibold">
                  Низкая
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="input input-bordered w-full  text-black"
            placeholder="Начало"
          />
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="input input-bordered w-full  text-black"
            placeholder="Конец"
          />
        </div>
        <input
          type="text"
          placeholder="Исполнитель"
          className="input input-bordered w-full  text-black"
        />
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-1">
            <p className="px-2 py-1 text-xs text-[#A1A1AA] bg-[#F4F4F5] rounded">
              Файлы
            </p>
            <AddFile />
          </div>
          <div className="flex flex-row gap-[14px]">
            <p className="text-[#27272A] font-medium border-b border-[#27272A]">
              Figma
            </p>
            <p className="text-[#27272A] font-medium border-b border-[#27272A]">
              LeanTime
            </p>
            <p className="text-[#27272A] font-medium border-b border-[#27272A]">
              FigJam
            </p>
          </div>
        </div>
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
