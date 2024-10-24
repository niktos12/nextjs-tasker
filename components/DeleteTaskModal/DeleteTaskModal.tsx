import React from "react";
import ReactDOM from "react-dom";

interface DeleteTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Удалить задачу</h2>
        <p className="mb-4">Вы уверены, что вы хотите удалить задачу?</p>
        <div className="flex justify-end">
          <button onClick={onClose} className="btn mr-2">
            Отменить
          </button>
          <button onClick={onConfirm} className="btn btn-error text-white">
            Удалить
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteTaskModal;
