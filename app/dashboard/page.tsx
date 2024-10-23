"use client";
import React, { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import TaskList from "@/components/TaskList/TaskList";
import Link from "next/link";
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
    <div className="container flex flex-col">
      <Header/>
      <TaskTabs title="Таблица" onOpenModal={handleOpenModal}/>
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
