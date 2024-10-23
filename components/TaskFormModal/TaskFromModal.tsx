import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddFile } from "../Icons/AddFile/AddFile";
import { Person } from "../Icons/Person/Person";
import ModalFile from "@/components/ModalFile/ModalFile";

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
  const [openFileModal, setOpenFileModal] = useState(false);

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
      status: "Новая",
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
      {openFileModal && (
        <ModalFile isOpen={openFileModal} onClose={() => setOpenFileModal(!openFileModal)} />
      )}
      <div
        className="bg-white p-16 rounded-[20px] shadow-md w-[580px] flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-black">Новая задача</h2>
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
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full  text-black resize-none px-4 py-[10px] h-[142px]"
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="select select-sm w-full text-black bg-[#A1A1AA4D] text-[#18181B] font-semibold text-sm rounded-lg"
            >
              <option disabled value="" className="font-semibold text-sm">
                Приоритет
              </option>
              <option value="Высокий" className="font-semibold text-sm">
                Высокий
              </option>
              <option value="Средний" className="font-semibold text-sm">
                Средний
              </option>
              <option value="Низкий" className="font-semibold text-sm">
                Низкий
              </option>
            </select>
          </div>
          <div className="">
            <div className="flex items-center space-x-2">
              <select
                value={complexity}
                onChange={(e) => setComplexity(e.target.value)}
                className="select select-sm w-full text-black bg-[#A1A1AA4D] text-[#18181B] font-semibold text-sm rounded-lg"
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
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full  text-black"
            placeholder="Начало"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full  text-black"
            placeholder="Конец"
          />
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Исполнитель"
            className="input input-bordered w-full  text-black"
          />
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
              <Person />
              <p>Олег Олегов</p>
            </div>
            <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
              <Person />
              <p>Никита Шилов</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div
            className="flex flex-row items-center gap-1"
            
          >
            <p className="px-2 py-1 text-xs text-[#A1A1AA] bg-[#F4F4F5] rounded">
              Файлы
            </p>
            <div onClick={() => setOpenFileModal(!openFileModal)} className="cursor-pointer">
              <AddFile />
            </div>
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
        <div className="flex flex-row gap-6 w-full justify-center">
          <button
            onClick={onClose}
            className="btn w-[214px] text-[#52525B] bg-white rounded-lg"
          >
            Отменить
          </button>
          <button
            onClick={handleSubmit}
            className="btn w-[214px] text-black bg-[#14B8A6] text-[#FAFAFA] hover:text-[#52525B] rounded-lg"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TaskFormModal;
