"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Plus } from "../Icons/Plus/Plus";
import { ArrowsUpDown } from "../Icons/ArrowsUpDown/ArrowsUpDown";
interface TaskTabsProps {
  onOpenModal: () => void;
  title: string;
}

const TaskTabs: React.FC<TaskTabsProps> = ({ onOpenModal, title }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();
  const pathname = usePathname();

  const handleTabChange = (path: string) => {
    router.push(path);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="flex items-center justify-start w-full mt-4 gap-[18px] flex-col ">
      <div className="flex flex-row justify-start w-full items-center gap-8">
        <h1 className="text-[32px] font-semibold">{title}</h1>

        <select className="select font-semibold text-2xl bg-[#F4F4F5] rounded-[10px] ">
          <option>1 Спринт</option>
        </select>
      </div>
      <div className="flex flex-row items-center gap-4 justify-start w-full">
        <div className="tabs bg-[#F4F4F5] rounded-[10px] p-1">
          <a
            className={`tab tab-bordered ${
              pathname === "/kanban"
                ? "bg-white"
                : "hover:bg-white duration-300"
            }`}
            onClick={() => handleTabChange("/kanban")}
          >
            Задачи
          </a>
          <a
            className={`tab tab-bordered disabled ${
              pathname === "/grant" ? "bg-white" : "hover:bg-white duration-300"
            }`}
          >
            Грант
          </a>
          <a
            className={`tab tab-bordered ${
              pathname === "/dashboard"
                ? "bg-white"
                : "hover:bg-white duration-300"
            }`}
            onClick={() => handleTabChange("/dashboard")}
          >
            Табличный Вид
          </a>
          <a
            className={`tab tab-bordered ${
              pathname === "/calendar"
                ? "bg-white"
                : "hover:bg-white duration-300"
            }`}
          >
            Календарь
          </a>
        </div>
        <div className="h-[41px] w-[1px] bg-[#D4D4D8]"></div>
        <button
          onClick={onOpenModal}
          className="btn bg-[#27272A] text-[#F4F4F5] flex flex-row gap-1 font-medium rounded-[10px] h-11 items-center hover:text-[#27272A]"
        >
          <Plus />
          Добавить задачу
        </button>

        <div className="flex items-center ml-4">
          <button
            className="flex flex-row items-center gap-3 hover:bg-[#F4F4F5] rounded-xl p-1"
            onClick={toggleSortOrder}
          >
            <ArrowsUpDown />
            {sortOrder === "asc" ? "От А-Я" : "От Я-А"}
          </button>

          <div className="ml-4 flex items-center space-x-2 gap-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#E4E4E7] flex items-center justify-center rounded-md">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
              </div>

              <span className="font-semibold">Высокая</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#E4E4E7] flex items-center justify-center rounded-md">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>

              <span className="font-semibold">Средняя</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#E4E4E7] flex items-center justify-center rounded-md">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="font-semibold">Низкая</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTabs;
