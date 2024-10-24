"use client";
import React, { useState, useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import { FC } from "react";
import Header from "@/components/Header/Header";
import TaskTabs from "@/components/TaskTabs/TaskTabs";
import { PersonAdd } from "@/components/Icons/PersonAdd/PersonAdd";
import { Person } from "@/components/Icons/Person/Person";
import { Comment } from "@/components/Icons/Comment/Comment";
import { SmallPlus } from "@/components/Icons/SmallPlus/SmallPlus";
import { SmallEye } from "@/components/Icons/SmallEye/SmallEye";
import TaskDetailModal from "@/components/TaskDetailModal/TaskDetailModal";
import { Plus } from "@/components/Icons/Plus/Plus";
import SkeletonTaskKanban from "@/components/SkeletonTaskKanban/SkeletonTaskKanban";

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

const KanbanBoard: FC = () => {
  const { tasks, addTask } = useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setSelectedTask(null);
  };
  const handleCreateTask = (task: Task) => {
    addTask(task);
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const getComplexityIndicator = (complexity: string) => {
    switch (complexity) {
      case "Высокая":
        return (
          <div className="bg-[#F87171] w-[14px] h-[14px] rounded-full"></div>
        );
      case "Средняя":
        return (
          <div className="bg-[#FBBF24] w-[14px] h-[14px] rounded-full"></div>
        );
      case "Низкая":
        return (
          <div className="bg-[#34D399] w-[14px] h-[14px] rounded-full"></div>
        );
      default:
        return null;
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "Новая":
        return (
          <div className="bg-[#3B82F6] w-[3px] h-[22px] rounded-full"></div>
        );
      case "В Работе":
        return (
          <div className="bg-[#F97316] w-[3px] h-[22px] rounded-full"></div>
        );
      case "Готова":
        return (
          <div className="bg-[#22C55E] w-[3px] h-[22px] rounded-full"></div>
        );
      case "Отложено":
        return (
          <div className="bg-[#B91C1C] w-[3px] h-[22px] rounded-full"></div>
        );
    }
  };

  const statuses = ["Новая", "В Работе", "Готова", "Отложено"] as const;

  return (
    <div className="flex flex-col items-center p-4 gap-20 container">
      <Header />
      <TaskTabs title="Задачи" onOpenModal={() => setIsAddModalOpen(true)} />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[39px] w-full">
          {statuses.map((status) => {
            const taskCount = tasks.filter(
              (task) => task.status === status
            ).length;
            return (
              <div
                key={status}
                className="bg-base-200 p-4 rounded-[20px] shadow h-fit w-[350px] flex flex-col gap-4"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-1 items-center">
                    {getStatusIndicator(status)}
                    <h2 className="text-xl font-bold capitalize">{status}</h2>
                  </div>
                  <SmallPlus />
                </div>

                {isLoading
                  ? Array.from({ length: taskCount }).map((_, index) => (
                      <SkeletonTaskKanban key={index} />
                    ))
                  : tasks
                      .filter((task) => task.status === status)
                      .map((task) => (
                        <div
                          key={task.id}
                          className="bg-base-100 py-6 px-4 rounded-xl shadow cursor-pointer hover:bg-gray-100"
                          onClick={() => handleTaskClick(task)}
                        >
                          <p className="text-[#A1A1AA] text-sm font-medium">
                            Приоритет: {task.priority}
                          </p>
                          <div className="border w-full mb-4"></div>
                          <div className="flex w-full">
                            <div className="flex flex-col gap-4 w-full">
                              <span className="font-bold">{task.title}</span>
                              <div className="flex flex-row gap-2 items-center">
                                <PersonAdd />
                                <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
                                  <Person />
                                  <p>Олег Олегов</p>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-between">
                                <div className="flex flex-row gap-2">
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

                                <div>
                                  {getComplexityIndicator(task.complexity)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                <p className="flex flex-row items-center text-[#3F3F46] font-semibold gap-1 mt-[26px]">
                  <Plus />
                  Добавить Задачу
                </p>
              </div>
            );
          })}
        </div>

        <TaskDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          task={selectedTask}
        />
        <TaskFormModal
          isOpen={isAddModalOpen}
          onClose={handleCloseAddModal}
          onSubmit={handleCreateTask}
        />
      </div>
    </div>
  );
};

export default KanbanBoard;
