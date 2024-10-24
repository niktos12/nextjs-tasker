import React, { useState, useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";
import SkeletonTask from "../TaskSkeleton/SkeletonTask";
import TaskFormModal from "../TaskFormModal/TaskFromModal";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import { Ellipsis } from "../Icons/Ellipsis/Ellipsis";
import TaskDetailModal from "../TaskDetailModal/TaskDetailModal";
import { Plus } from "../Icons/Plus/Plus";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const TaskList: React.FC = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTaskStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddTask, setIsModalAddTask] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleCloseAddModal = () => {
    setIsModalAddTask(false);
    setSelectedTask(null);
  };

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

  const handleCreateTask = (task: Task) => {
    addTask(task);
    setIsModalAddTask(false);
    setSelectedTask(null);
  };

  const handleConfirmDelete = () => {
    if (selectedTask) {
      deleteTask(selectedTask.id);
      setIsDeleteModalOpen(false);
      setSelectedTask(null);
    }
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    task: Task
  ) => {
    updateTask({ ...task, status: e.target.value as Task["status"] });
  };

  const handlePriorityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    task: Task
  ) => {
    updateTask({ ...task, priority: e.target.value });
  };

  const handleComplexityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    task: Task
  ) => {
    updateTask({ ...task, complexity: e.target.value });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Новая":
        return "bg-[#3B82F6CC]";
      case "В Работе":
        return "bg-[#F97316CC]";
      case "Готова":
        return "bg-[#22C55ECC]";
      case "Отложено":
        return "bg-[#22C55ECC]";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Высокий":
        return "bg-red-500";
      case "Средний":
        return "bg-yellow-500";
      case "Низкий":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Высокая":
        return "bg-red-500";
      case "Средняя":
        return "bg-yellow-500";
      case "Низкая":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-4 bg-[#FAFAFA] rounded-lg">
      <div className="text-[#52525B] text-2xl flex flex-row justify-between">
        <p className="w-1/6 text-center mr-1">Задачи</p>
        <p className="w-1/6 text-center text-xl mr-3 border-r-2 border-[#D4D4D8] font-semibold">
          Статус
        </p>
        <p className="w-1/6 text-center text-xl mr-3 border-r-2 border-[#D4D4D8] font-semibold">
          Приоритет
        </p>
        <p className="w-1/6 text-center text-xl mr-3 border-r-2 border-[#D4D4D8] font-semibold">
          Сложность
        </p>
        <p className="w-1/6 text-center text-xl mr-3 border-r-2 border-[#D4D4D8] font-semibold">
          Начало
        </p>
        <p className="w-1/6 text-center text-xl mr-3 font-semibold">Конец</p>
      </div>
      <div>
        {isLoading
          ? Array.from({ length: tasks.length }).map((_, index) => (
              <SkeletonTask key={index} />
            ))
          : tasks.map((task) => (
              <div
                key={task.id}
                className="border-b border-gray-200 rounded-lg px-8 py-[20px] gap-3 my-2 cursor-pointer  bg-white flex flex-row items-center hover:bg-gray-100"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      key="edit"
                      onClick={() => handleEditTask(task)}
                    >
                      Редактировать
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      key="delete"
                      onClick={() => handleDeleteTask(task)}
                    >
                      Удалить
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex flex-row items-center w-full">
                  <p className="w-1/6 text-center">
                    <span
                      className="font-bold flex flex-row gap-3"
                      onClick={() => handleTaskClick(task)}
                    >
                      {task.title}
                    </span>
                  </p>
                  <div className="flex flex-row gap-[50px] items-center w-full justify-around">
                    <select
                      value={task.status}
                      onChange={(e) => handleStatusChange(e, task)}
                      className={`select select-sm w-[144px] text-center text-white font-semibold   ${getStatusColor(
                        task.status
                      )}`}
                    >
                      <option value="Новая">Новая</option>
                      <option value="В Работе">В Работе</option>
                      <option value="Готова">Готова</option>
                      <option value="Отложено">Отложено</option>
                    </select>
                    <select
                      value={task.priority}
                      onChange={(e) => handlePriorityChange(e, task)}
                      className={`select select-sm w-[144px] text-center text-white font-semibold  ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      <option value="Высокий">Высокий</option>
                      <option value="Средний">Средний</option>
                      <option value="Низкий">Низкий</option>
                    </select>
                    <select
                      value={task.complexity}
                      onChange={(e) => handleComplexityChange(e, task)}
                      className={`select select-sm w-[144px] text-center text-white font-semibold   ${getComplexityColor(
                        task.complexity
                      )}`}
                    >
                      <option value="Высокая">Высокая</option>
                      <option value="Средняя">Средняя</option>
                      <option value="Низкая">Низкая</option>
                    </select>
                    <p className="w-[144px] text-center p-2 ">
                      {task.startDate}
                    </p>
                    <p className="w-[144px] text-center p-2">{task.endDate}</p>
                  </div>
                </div>
              </div>
            ))}
        <p
          className="flex flex-row gap-1 font-semibold text-[#3F3F46] text-sm mt-10 cursor-pointer"
          onClick={() => setIsModalAddTask(true)}
        >
          <Plus />
          Добавить Задачу
        </p>
      </div>

      {selectedTask && (
        <EditTaskModal
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
      <TaskDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={selectedTask}
      />
      <TaskFormModal
        isOpen={isModalAddTask}
        onClose={handleCloseAddModal}
        onSubmit={handleCreateTask}
      />
    </div>
  );
};

export default TaskList;
