"use client";

import Header from "@/components/Header/Header";
import { ArrowDown } from "@/components/Icons/ArrowDown/ArrowDown";
import { CloseEye } from "@/components/Icons/CloseEye/CloseEye";
import { Ellipsis } from "@/components/Icons/Ellipsis/Ellipsis";
import { FullEye } from "@/components/Icons/FullEye/FullEye";
import { Search } from "@/components/Icons/Search/Search";
import ModalFile from "@/components/ModalFile/ModalFile";
import React, { useState } from "react";

const Cabinet: React.FC = () => {
  const [open, setOpen] = useState(false)

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="container flex flex-col">
      <Header />
      <button onClick={() => setOpen(!open)}>Модалка</button>
      <div className="flex flex-col gap-12">
        <h1 className="text-[32px] font-semibold">Личный кабинет</h1>
        <div className="flex flex-col gap-16">
          <div className="flex justify-between">
            <div className="flex gap-4 w-[550px] h-[151px] items-center">
              <div className="flex flex-col gap-1">
                <img src="/picture.png" alt="" />
                <button className="text-xs font-[600] w-full bg-zinc-100 py-[2px] rounded-[4px]">
                  Изменить фото
                </button>
              </div>
              <div className="flex flex-col gap-4 font-medium text-zinc-600">
                <p className="bg-zinc-100 w-[403px] rounded-lg h-12 p-3">
                  Олег
                </p>
                <p className="bg-zinc-100 w-[403px] rounded-lg h-12 p-3">
                  Олегов
                </p>
              </div>
            </div>
            <div className="border"></div>
            <div className="flex gap-8 w-[838px]">
              <div className="flex flex-col gap-10 w-[403px]">
                <h1 className="text-xl font-semibold">Сменить пароль</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Старый пароль"
                      className="w-full p-3 rounded-xl bg-zinc-100"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 cursor-pointer"
                    >
                      {showPassword ? <CloseEye /> : <FullEye />}
                    </span>
                  </div>
                  <div className="flex items-center relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Новый пароль"
                      className="w-full p-3 bg-zinc-100 rounded-xl"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 cursor-pointer"
                    >
                      {showPassword ? <CloseEye /> : <FullEye />}
                    </span>
                  </div>
                  <div className="flex items-center relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Повторите новый пароль"
                      className="w-full p-3 bg-zinc-100 rounded-xl"
                    />
                    <span
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-4 cursor-pointer"
                    >
                      {showConfirmPassword ? <CloseEye /> : <FullEye />}
                    </span>
                  </div>
                </div>
                <button className="bg-teal-500 rounded-lg p-[10px] text-white">
                  Сохранить
                </button>
              </div>
              <div className="flex flex-col gap-7 w-[403px]">
                <div className="flex flex-col gap-10">
                  <h1 className="text-xl font-semibold">Сменить почту</h1>
                  <input
                    type="email"
                    placeholder="gulnar060@yandex.ru"
                    className="w-full p-3 bg-zinc-100 rounded-xl"
                  />
                </div>
                <button className="bg-teal-500 rounded-lg p-[10px] text-white">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] bg-zinc-100 border-[1px] mb-[38px]">
            <h1 className="text-lg font-semibold p-8">Мои проекты</h1>
            <div className="flex flex-col gap-3 p-8">
              <div className="bg-white w-[1473px] h-20 items-center flex rounded-[20px] px-8 py-5 justify-between">
                <div className="flex items-center gap-3">
                <Ellipsis/>
                  <h2 className="text-[22px] font-semibold">
                    Подготовка к экзамену
                  </h2>
                </div>
                <div className="flex gap-16 items-center">
                  <div className="flex bg-blue-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Новая</p>
                    <ArrowDown/>
                  </div>
                  <div className="flex bg-orange-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Средний</p>
                    <ArrowDown/>
                  </div>
                  <div className="flex bg-red-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Высокая</p>
                    <ArrowDown/>
                  </div>
                  <p className="text-[20px] font-semibold">21.10.2024</p>
                  <p className="text-[20px] font-semibold">24.10.2024</p>
                </div>
              </div>
              <div className="bg-white w-[1473px] h-20 items-center flex rounded-[20px] px-8 py-5 justify-between">
                <div className="flex items-center gap-3">
                <Ellipsis/>
                  <h2 className="text-[22px] font-semibold">
                    Надеть носки
                  </h2>
                </div>
                <div className="flex gap-16 items-center">
                  <div className="flex bg-green-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Готовая</p>
                    <ArrowDown/>
                  </div>
                  <div className="flex bg-green-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Низкий</p>
                    <ArrowDown/>
                  </div>
                  <div className="flex bg-orange-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Средняя</p>
                    <ArrowDown/>
                  </div>
                  <p className="text-[20px] font-semibold">21.10.2024</p>
                  <p className="text-[20px] font-semibold">24.10.2024</p>
                </div>
              </div>
              <div className="bg-white w-[1473px] h-20 items-center flex rounded-[20px] px-8 py-5 justify-between">
                <div className="flex items-center gap-3">
                <Ellipsis/>
                  <h2 className="text-[22px] font-semibold">
                    Поиск референсов
                  </h2>
                </div>
                <div className="flex gap-16 items-center">
                  <div className="flex bg-green-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Отложено</p>
                    <ArrowDown/>
                  </div>
                  <div className="flex bg-red-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Высокий</p>
                    <ArrowDown/>
                  </div>
                  <div className="flex bg-green-500 text-white gap-2 px-4 py-2 rounded-xl w-[144px] justify-center items-center">
                    <p className="text-[18px]">Низкая</p>
                    <ArrowDown/>
                  </div>
                  <p className="text-[20px] font-semibold">21.10.2024</p>
                  <p className="text-[20px] font-semibold">24.10.2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalFile isOpen={open} onClose={()=> setOpen(false)}/>
    </div>
  );
};
export default Cabinet;
