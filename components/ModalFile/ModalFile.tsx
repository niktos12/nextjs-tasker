import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Install } from '../Icons/Install/Install';
interface ModalProps{
    isOpen: boolean
    onClose: () => void
}
export default function ModalFile({ isOpen, onClose }:ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';  // Блокировка прокрутки при открытом модальном окне
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Добавления файла</h2>
        </div>
        <input
          type="text"
          placeholder="Название"
          className="w-full border border-zinc-400 text-sm px-4 py-3 mb-4 rounded-lg"
        />
        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center mb-6 flex flex-col items-center">
            <Install/>
            <p className="mt-2 text-sm text-gray-500">
            Перетащите файл или нажмите чтобы загрузить файл.
          </p>
          <label htmlFor="">
            <input
            type="file"
            className="mt-2 block w-full text-sm text-gray-500
            hidden
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-teal-500 file:text-white
            hover:file:bg-teal-600
            "
          />
          </label>
          
        </div>
        <div className="flex gap-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border text-lg rounded-lg text-zinc-600 bg-white hover:bg-gray-100 w-[214px]"
          >
            Отменить
          </button>
          <button className="px-4 py-2 text-lg bg-teal-500 text-white rounded-lg hover:bg-teal-600 w-[214px]">
            Добавить
          </button>
        </div>
      </div>
    </div>,
    document.body // Здесь модальное окно будет вставлено в DOM
  );
}
