import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Cancel from "../Icons/Cancel/Cancel";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalUser: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-[20px] flex flex-col gap-8 w-[581px] p-16 relative shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl font-bold mb-4">Олег Олегов</h2>
        <div className="flex flex-col gap-5">
          <div>
            <div className="relative">
              <input
                type="password"
                placeholder="Новый пароль"
                className="border border-gray-300 rounded-lg w-full p-3 focus:ring focus:ring-opacity-50 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="gul@yandex.ru"
              className="border border-gray-300 rounded-lg w-full p-3 focus:ring focus:ring-opacity-50 focus:ring-indigo-600"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                placeholder="Роль"
                className="border border-gray-300 rounded-lg w-full p-3 focus:ring focus:ring-opacity-50 focus:ring-indigo-600"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Проект"
                  className="border border-gray-300 rounded-lg w-full p-3 focus:ring focus:ring-opacity-50 focus:ring-indigo-600"
                />
                <div className="flex gap-4">
                  <div className="flex gap-4">
                    <span className="bg-teal-50 text-black text-sm px-2 py-1 rounded-lg flex gap-2 items-center">
                      Хакатон
                      <Cancel />
                    </span>
                    <span className="bg-zinc-100 text-black text-sm px-2 py-1 rounded-lg flex gap-2 items-center">
                      Покушать
                      <Cancel />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                type="button"
                className="btn bg-white text-black border-[1px] w-[214px] h-[48px] flex items-center justify-center rounded-lg"
                onClick={onClose}
              >
                Отменить
              </button>
              <button
                type="submit"
                className="btn hover:text-[#52525B] bg-teal-500 text-white w-[214px] h-[48px] flex items-center justify-center rounded-lg"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ModalUser;
