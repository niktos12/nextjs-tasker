"use client";

import Header from "@/components/Header/Header";
import { CloseEye } from "@/components/Icons/CloseEye/CloseEye";
import { FullEye } from "@/components/Icons/FullEye/FullEye";
import { Statistic } from "@/components/Statistic/Statistic";
import Link from "next/link";
import React, { useState } from "react";

const AdminCabinet: React.FC = () => {
  const [open, setOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="container flex flex-col gap-[50px]">
      <div className="flex justify-between mb-20">
        <div className="flex flex-col gap-12">
          <h1 className="text-[32px] font-semibold">Личный кабинет</h1>
          <div className="flex flex-col gap-16 w-[550px]">
            <div className="flex gap-4 w-[550px] h-[151px] items-center">
              <div className="flex flex-col gap-1">
                <img src="/Аватары.png" alt="" className="w-full h-full"/>
                <button className="text-xs font-[600] w-full bg-zinc-100 py-[2px] rounded-[4px]">
                  Изменить фото
                </button>
              </div>
              <div className="flex flex-col gap-4 font-medium text-zinc-600">
                <p className="text-sm text-teal-500">Супер Администратор</p>
                <p className="bg-zinc-100 w-[403px] rounded-lg h-12 p-3">
                  Никита
                </p>
                <p className="bg-zinc-100 w-[403px] rounded-lg h-12 p-3">
                  Шилов
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[838px]">
              <div className="flex flex-col gap-10 w-[403px]">
                <h1 className="text-xl font-semibold">Сменить пароль</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Старый пароль"
                      className="w-full p-3 rounded-xl border-zinc-200 border-[1px]"
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
                      className="w-full p-3 border-zinc-200 border-[1px] rounded-xl"
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
                      className="w-full p-3 border-zinc-200 rounded-xl border-[1px]"
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
                    className="w-full p-3 border-zinc-200 border-[1px] rounded-xl"
                  />
                </div>
                <button className="bg-teal-500 rounded-lg p-[10px] text-white">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[823px] flex flex-col gap-8">
          <h1 className="text-2xl font-semibold h-12 flex items-center">Статистика</h1>
          <div className="flex flex-col gap-3">
            <Statistic />
            <Statistic />
            <Statistic />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminCabinet;
