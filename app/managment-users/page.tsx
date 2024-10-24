"use client";
import { useState } from "react";
import ModalUser from "@/components/ordinary/ModalUser";
import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import { ArrowsUpDown } from "@/components/Icons/ArrowsUpDown/ArrowsUpDown";
import { Search } from "@/components/Icons/Search/Search";
import Settings from "@/components/Icons/Settings/Settings";
import InfoUser from "@/components/ordinary/InfoUser";

export default function ManagmentUsers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container flex flex-col">
      <AdminHeader />
      <div className="w-[1534px] h-[815px] flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4 items-center">
            <h1 className="text-[20px] font-semibold">Пользователи</h1>
            <div className="flex gap-3 text-xs text-zinc-400 items-center">
              <p>Online 6</p>
              <p>Общее кол-во 23</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Поиск"
              className="px-4 h-12 border-[1px] border-zinc-200 w-[313px] rounded-lg relative"
            />
            <span className="absolute left-[340px] top-[220px]">
              <Search />
            </span>
            <div className="flex gap-3 items-center">
              <ArrowsUpDown />
              <p className="text-sm">От А-Я</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 h-[700px]">
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар1.png" alt="" />
                  <div>
                    <p className="text-xs text-teal-500">Супер Администратор</p>
                    <p className="font-semibold">Darrell Steward</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] hover:bg-zinc-100 duration-300 px-3 py-2 rounded-lg">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар2.png" alt="" />
                  <div>
                    <p className="text-xs text-teal-500">Администратор</p>
                    <p className="font-semibold">Олег Олегов</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар3.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Jane Cooper</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар4.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Theresa Webb</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар5.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Brooklyn Simmons</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар5.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Brooklyn Simmons</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар5.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Brooklyn Simmons</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[217px]">
                  <img src="/Аватар6.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Cameron Williamson</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар7.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Kristin Watson</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар8.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Esther Howard</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
            <div className="flex justify-between items-center h-[60px] px-3 py-2 hover:bg-zinc-100 duration-300">
              <div className="flex gap-16 h-[44px]">
                <div className="flex gap-3 items-center w-[215px]">
                  <img src="/Аватар9.png" alt="" />
                  <div>
                    <p className="text-xs text-zinc-400">Исполнитель</p>
                    <p className="font-semibold">Leslie Alexander</p>
                  </div>
                </div>
                <InfoUser />
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                <Settings />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalUser isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
