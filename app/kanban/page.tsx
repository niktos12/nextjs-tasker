"use client";
import React, { useState } from "react";
import { useTaskStore } from "@/store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import EditTaskModal from "@/components/EditTaskModal/EditTaskModal";
import { FC } from "react";
import Header from "@/components/Header/Header";
import TaskTabs from "@/components/TaskTabs/TaskTabs";

interface Task {
  id: number;
  title: string;
  description: string;
  complexity: string;
  priority: string;
  startDate: string;
  endDate: string;
  status: "Новая" | "В Работе" | "Готова" | "Отложена";
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

  const statuses = ["Новая", "В Работе", "Готова", "Отложена"] as const;

  const moveTask = (taskId: number, newStatus: Task["status"]) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      updateTask({ ...task, status: newStatus });
    }
  };

  return (
    <div className="flex flex-col items-center p-4 gap-20">
      <Header />
      <TaskTabs onOpenModal={handleOpenModal}/>
      <div>
        {/* <button onClick={handleOpenModal} className="btn btn-primary mb-4">
          Добавить задачу
        </button> */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {statuses.map((status) => (
            <div
              key={status}
              className="bg-base-200 p-4 rounded-[20px] shadow h-fit w-[350px] flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold mb-2 capitalize">{status}</h2>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-base-100 py-6 px-4 rounded-xl shadow"
                  >
                    <p className="text-[#E4E4E7] text-sm">
                      Приоритет: {task.priority}
                    </p>
                    <div className="border w-full mb-4"></div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-bold">{task.title}</span>
                        <p className="text-sm">{task.description}</p>
                        <p className="text-xs">Сложность: {task.complexity}</p>

                        <p className="text-xs">
                          {task.startDate} - {task.endDate}
                        </p>
                      </div>
                      <div className="flex space-x-2">
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
                      </div>
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
