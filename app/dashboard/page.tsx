"use client";
import React, { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import TaskList from "@/components/TaskList/TaskList";
import Link from "next/link";

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

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const addTask = useTaskStore((state) => state.addTask);

  const handleCreateTask = (task: Task) => {
    addTask(task);
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleOpenModal = () => {
    setSelectedTask(null); 
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <Link href={'/lk'}>Личный кабинет</Link>
      <Link href={'/kanban'}>Kanban</Link>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <button onClick={handleOpenModal} className="btn btn-primary mb-4">
        Create New Task
      </button>
      <TaskList />
      <TaskFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
};

export default Dashboard;
