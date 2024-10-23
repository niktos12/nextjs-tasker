import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AddFile } from "../Icons/AddFile/AddFile";
import ModalFile from "../ModalFile/ModalFile";
import { PersonAdd } from "../Icons/PersonAdd/PersonAdd";
import { Person } from "../Icons/Person/Person";
import { useTaskStore } from "@/store/taskStore";
import Check from "../Icons/Check/Check";
import FileAdd from "../Icons/FileAdd/FileAdd";
import Send from "../Icons/Send/Send";
import { Comment } from "../Icons/Comment/Comment";
import { SmallEye } from "../Icons/SmallEye/SmallEye";

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

interface TaskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  isOpen,
  onClose,
  task,
}) => {
  const [openFileModal, setOpenFileModal] = useState(false);
  const { tasks, moveTask, updateTask } = useTaskStore();
  const currentTask = tasks.find((t) => t.id === task?.id);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    moveTask(task!.id, e.target.value as Task["status"]);
  };

  const handleComplexityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTask({ ...task!, complexity: e.target.value });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTask({ ...task!, priority: e.target.value });
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
        className="bg-white p-6 rounded-[20px] shadow-md w-[1024px] flex flex-col gap-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <p className="text-[#A1A1AA] bg-[#F4F4F5] px-2 py-1 rounded w-[72px] text-xs">
            Название
          </p>
          <div className="flex flex-row gap-4">
            <p className="text-[#A1A1AA] text-xs ">
              Создан: {currentTask?.startDate}
            </p>
            <p className="text-[#A1A1AA] text-xs ">
              Обновлялся: {currentTask?.endDate}
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-black">{currentTask?.title}</h2>
        <div className="border w-full"></div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-[#A1A1AA] bg-[#F4F4F5] px-2 py-1 rounded w-[60px] text-xs">
              Задачи
            </p>
            <p className="text-[#3F3F46]">{currentTask?.description}</p>
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
        </div>

        <div className="border w-full"></div>
        <div className="flex flex-row gap-2 items-center">
          <PersonAdd />
          <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
            <Person />
            <p>Олег Олегов</p>
          </div>
          <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
            <Person />
            <p>Никита Шилов</p>
          </div>
          <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
            <Person />
            <p>Ева Гриднева</p>
          </div>
        </div>
        <div className="border w-full"></div>
        <div className="flex gap-4 flex-row justify-between items-center">
          <div className="flex flex-row gap-4">
            <select
              value={currentTask?.complexity}
              onChange={handleComplexityChange}
              className="select py-2 bg-[#EF4444CC] text-white rounded-lg"
            >
              <option value="Низкая">Низкая</option>
              <option value="Средняя">Средняя</option>
              <option value="Высокая">Высокая</option>
            </select>

            <select
              value={currentTask?.status}
              onChange={handleStatusChange}
              className="select py-2 bg-[#F97316CC] text-white rounded-lg"
            >
              <option value="Новая">Новая</option>
              <option value="В Работе">В Работе</option>
              <option value="Готова">Готова</option>
              <option value="Отложено">Отложено</option>
            </select>
          </div>

          <div className="flex flex-row gap-8">
            <p className="text-black text-lg">
              <span className="text-[#52525B]">Начало:</span>{" "}
              {currentTask?.startDate}
            </p>
            <p className="text-black text-lg">
              <span className="text-[#52525B]">Конец:</span>{" "}
              {currentTask?.endDate}
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFA] flex flex-col rounded-[20px] gap-4 p-8">
          <p className="text-[#A1A1AA] bg-[#F4F4F5] px-2 py-1 rounded w-[92px] text-xs">
            Комментарии
          </p>
          <div className="chat chat-end ">
            <div className="chat-header text-[#14B8A6] text-xs mb-1">
              Никита Шилов
            </div>
            <div className="chat-bubble text-[#52525B] bg-[#F4F4F5]">
              Хочу спать
              <time className="flex flex-row gap-1 items-center justify-end text-[8px]">
                <Check />
                08:42 am
              </time>
            </div>
          </div>
          <div className="chat chat-start ">
            <div className="chat-header text-[#14B8A6] text-xs mb-1">
              Ева Гриднева
            </div>
            <div className="chat-bubble text-[#52525B] bg-[#F4F4F5]">
              А я кушать
              <time className="flex flex-row gap-1 items-center justify-end text-[8px]">
                <Check />
                08:42 am
              </time>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-between">
            <FileAdd />
            <input
              type="text"
              className="px-4 py-3 border border-[#E4E4E7] bg-[#FAFAFA] rounded-md w-full mr-2"
              placeholder="Сообщение ..."
            />
            <Send />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <div className="flex flex-row gap-1 items-center">
            <Comment />
            <p className="bg-[#F4F4F5] text-[#A1A1AA] rounded-md  p-1 h-[18px] flex items-center">
              3
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <SmallEye />
            <p className="bg-[#F4F4F5] text-[#A1A1AA] rounded-md p-1 h-[18px] flex items-center">
              4
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default TaskDetailModal;
