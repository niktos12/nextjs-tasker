import { useEffect } from "react";
import { createPortal } from "react-dom";

interface EmailChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailChangeModal: React.FC<EmailChangeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[20px] w-[581px] p-16 relative shadow-lg flex flex-col gap-6"
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
      </div>
    </div>,
    document.body
  );
};

export default EmailChangeModal;
