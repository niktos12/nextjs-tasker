"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TaskTabsProps {
  onOpenModal: () => void; // Prop to open the modal
}

const TaskTabs: React.FC<TaskTabsProps> = ({ onOpenModal }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const handleTabChange = (path: string) => {
    router.push(path);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="flex items-center justify-between py-4">
      <div className="tabs">
        <a
          className={`tab tab-bordered ${
            pathname === "/tasks" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("/tasks")}
        >
          Задачи
        </a>
        <a
          className={`tab tab-bordered ${
            pathname === "/grant" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("/grant")}
        >
          Грант
        </a>
        <a
          className={`tab tab-bordered ${
            pathname === "/table-view" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("/table-view")}
        >
          Табличный Вид
        </a>
        <a
          className={`tab tab-bordered ${
            pathname === "/calendar" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("/calendar")}
        >
          Календарь
        </a>
      </div>

      <button onClick={onOpenModal} className="btn btn-primary mb-4">
        Добавить задачу
      </button>

      <div className="flex items-center ml-4">
        <button className="btn btn-sm" onClick={toggleSortOrder}>
          {sortOrder === "asc" ? "От А-Я" : "От Я-А"}
        </button>

        <div className="ml-4 flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span className="badge">Высокая</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <span className="badge">Средняя</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="badge">Низкая</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTabs;
