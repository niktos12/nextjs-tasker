import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AddFile } from "../Icons/AddFile/AddFile";
import { Person } from "../Icons/Person/Person";
import ModalFile from "@/components/ordinary/ModalFile";

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
  const [openFileModal, setOpenFileModal] = useState(false);

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
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {openFileModal && (
        <ModalFile
          isOpen={openFileModal}
          onClose={() => setOpenFileModal(!openFileModal)}
        />
      )}
      <motion.div
        className="bg-white p-16 rounded-[20px] shadow-md w-[580px] flex flex-col gap-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-black">Редактировать задачу</h2>
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
          <div className="flex flex-row items-center gap-1">
            <p className="px-2 py-1 text-xs text-[#A1A1AA] bg-[#F4F4F5] rounded">
              Файлы
            </p>
            <div
              onClick={() => setOpenFileModal(!openFileModal)}
              className="cursor-pointer"
            >
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
            className="btn w-[214px] text-white bg-[#14B8A6] text-[#FAFAFA] hover:text-[#52525B] rounded-lg"
          >
            Сохранить
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default EditTaskModal;
