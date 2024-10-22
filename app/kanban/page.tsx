"use client";
import React, { useState } from "react";
import { useTaskStore } from "@/store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import { FC } from "react";
import Link from "next/link";

interface Task {
  id: number;
  title: string;
  description: string;
  complexity: string;
  priority: string;
  startDate: string;
  endDate: string;
  status: "todo" | "in-progress" | "done" | "postponed";
}

const KanbanBoard: FC = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    setIsModalOpen(false);
    setSelectedTask(null);
  };
  const handleOpenModal = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const openTaskModal = () => {
    setSelectedTask({
      id: Date.now(),
      title: "",
      description: "",
      complexity: "Low",
      priority: "Medium",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
      status: "todo",
    });
    setIsModalOpen(true);
  };
  const handleCreateTask = (task: Task) => {
    addTask(task);
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const statuses = ["todo", "in-progress", "done", "postponed"] as const;

  const moveTask = (taskId: number, newStatus: Task["status"]) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      updateTask({ ...task, status: newStatus });
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Link href={"/dashboard"}>dashboard</Link>
      <button onClick={handleOpenModal} className="btn btn-primary mb-4">
        Добавить задачу
      </button>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {statuses.map((status) => (
          <div key={status} className="bg-base-200 p-4 rounded shadow h-fit">
            <h2 className="text-xl font-bold mb-2 capitalize">{status}</h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-base-100 p-2 rounded shadow mb-2"
                >
                  <div className="flex justify-between">
                    <div>
                      <span className="font-bold">{task.title}</span>
                      <p className="text-sm">{task.description}</p>
                      <p className="text-xs">Сложность: {task.complexity}</p>
                      <p className="text-xs">Приоритет: {task.priority}</p>
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
                            className="btn btn-xs btn-outline"
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
        task={
          selectedTask || {
            id: Date.now(),
            title: "",
            description: "",
            complexity: "",
            priority: "",
            startDate: "",
            endDate: "",
            status: "todo",
          }
        }
      />
    </div>
  );
};

export default KanbanBoard;
