import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface EmailChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailChangeModal: React.FC<EmailChangeModalProps> = ({
  isOpen,
  onClose,
}) => {
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
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[20px] w-[581px] p-16 relative shadow-lg flex flex-col gap-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-4xl font-semibold">Смена почты</h2>
        <div className="flex flex-col gap-8">
          <p className="">
            Введите код подтверждения, отправленный на вашу текущую почту
          </p>
          <div>
            <input
              type="text"
              placeholder="Код"
              className="border border-gray-300 text-sm rounded-md rounded-[10px] px-4 py-[10px] w-full"
            />
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
              Продолжить
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default EmailChangeModal;
