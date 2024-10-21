"use client";
import React, { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import TaskFormModal from "@/components/TaskFormModal/TaskFromModal";
import TaskList from "@/components/TaskList/TaskList";

interface Task {
  id: number;
  title: string;
  description: string;
  complexity: string;
  priority: string;
  startDate: string;
  endDate: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addTask = useTaskStore((state) => state.addTask);

  const handleCreateTask = (task: Task) => {
    addTask(task);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary mb-4"
      >
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
