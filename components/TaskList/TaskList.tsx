import React, { useState, useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";
import SkeletonTask from "../TaskSkeleton/SkeletonTask";
import TaskFormModal from "../TaskFormModal/TaskFromModal";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";

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

const TaskList: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleDeleteTask = (task: Task) => {
    setSelectedTask(task);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    setIsEditModalOpen(false);
    setSelectedTask(null);
  };

  const handleConfirmDelete = () => {
    if (selectedTask) {
      deleteTask(selectedTask.id);
      setIsDeleteModalOpen(false);
      setSelectedTask(null);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Task List</h2>
      <ul>
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonTask key={index} />
            ))
          : tasks.map((task) => (
              <li
                key={task.id}
                className="p-2 border-b border-gray-200 flex justify-between items-center"
              >
                <div>
                  <span className="font-bold">{task.title}</span> -{" "}
                  {task.status}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditTask(task)}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
      </ul>
      {selectedTask && (
        <TaskFormModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedTask(null);
          }}
          onSubmit={handleUpdateTask}
          task={selectedTask}
        />
      )}
      {selectedTask && (
        <DeleteTaskModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setSelectedTask(null);
          }}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default TaskList;
