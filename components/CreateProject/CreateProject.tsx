import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { User } from "../Icons/User/User";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProject: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-[20px] w-[581px] p-16 relative shadow-lg flex flex-col gap-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-4xl font-semibold">Новый проект</h2>
        <div className="flex flex-col gap-8">
          <div>
            <input
              type="text"
              className="border border-gray-300 rounded-[10px] w-full px-4 py-3"
              placeholder="Название"
            />
          </div>

          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-zinc-300 text-black rounded-[10px] w-[144px] text-sm px-4 py-2 focus:ring focus:ring-opacity-50 focus:ring-indigo-600"
            >
              <option value="">Статус</option>
              <option value="Новая">Новая</option>
              <option value="В работе">В работе</option>
              <option value="Готова">Готова</option>
              <option value="Отложить">Отложить</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded-[10px] w-full px-4 py-3"
              />
            </div>

            <div>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 rounded-[10px] w-full px-4 py-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Исполнитель"
              className="border border-gray-300 rounded-[10px] w-full px-4 py-3"
            />
            <div className="flex space-x-2 mt-2">
              <div className="flex gap-4">
                <span className="bg-teal-50 text-black text-sm px-2 py-1 rounded-lg flex gap-2 items-center">
                  <User />
                  Олег Олегов
                </span>
                <span className="bg-zinc-100 text-black text-sm px-2 py-1 rounded-lg flex gap-2 items-center">
                  <User />
                  Никита Шилов
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <button
              type="button"
              className="btn bg-white text-black border-[1px] w-[214px] h-[48px] flex items-center justify-center rounded-lg"
              onClick={onClose}
            >
              Отменить
            </button>
            <button
              type="submit"
              className="btn bg-teal-500 text-white w-[214px] h-[48px] flex items-center hover:text-[#52525B] justify-center rounded-lg"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CreateProject;
