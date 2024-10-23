"use client";
import React, { useState } from "react";
import { useTaskStore } from "@/store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import EditTaskModal from "@/components/EditTaskModal/EditTaskModal";
import { FC } from "react";
import Header from "@/components/Header/Header";
import TaskTabs from "@/components/TaskTabs/TaskTabs";
import { PersonAdd } from "@/components/Icons/PersonAdd/PersonAdd";
import { Person } from "@/components/Icons/Person/Person";
import { Comment } from "@/components/Icons/Comment/Comment";
import { SmallPlus } from "@/components/Icons/SmallPlus/SmallPlus";
import { SmallEye } from "@/components/Icons/SmallEye/SmallEye";

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
  const { tasks, addTask, deleteTask, updateTask } = useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleOpenModal = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const handleCreateTask = (task: Task) => {
    addTask(task);
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    setIsEditModalOpen(false);
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

  const moveTask = (taskId: number, newStatus: Task["status"]) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      updateTask({ ...task, status: newStatus });
    }
  };

  return (
    <div className="flex flex-col items-center p-4 gap-20">
      <Header />
      <TaskTabs onOpenModal={handleOpenModal} />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {statuses.map((status) => (
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

              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-base-100 py-6 px-4 rounded-xl shadow"
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
                          <div className="flex flex-row">
                            <div className="flex flex-row gap-1 items-center">
                              <Comment />
                              <p className="bg-[#F4F4F5] text-[#A1A1AA] rounded-md  p-1 h-[18px] flex items-center">
                                3
                              </p>
                            </div>
                            <div className="flex flex-row gap-1 items-center gap-1">
                              <SmallEye />
                              <p className="bg-[#F4F4F5] text-[#A1A1AA] rounded-md p-1 h-[18px] flex items-center">
                                4
                              </p>
                            </div>
                          </div>

                          <div>{getComplexityIndicator(task.complexity)}</div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full"></div>
                      </div>
                      {/* <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditTask(task)}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="btn btn-sm btn-error"
                        >
                          Удалить
                        </button>
                      </div> */}
                    </div>
                    <div className="mt-2 flex space-x-2">
                      {statuses.map(
                        (s) =>
                          s !== status && (
                            <button
                              key={s}
                              onClick={() => moveTask(task.id, s)}
                              className="bg-[#F4F4F5] px-2 py-1 text-xs rounded text-[#A1A1AA] hover:text-black duration-300"
                            >
                              {s}
                            </button>
                          )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <TaskFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateTask}
        />

        {selectedTask && (
          <EditTaskModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSubmit={handleUpdateTask}
            task={selectedTask}
          />
        )}
      </div>
    </div>
  );
};

export default KanbanBoard;
