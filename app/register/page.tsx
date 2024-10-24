"use client";
import React, { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { FullEye } from "@/components/Icons/FullEye/FullEye";
import { CloseEye } from "@/components/Icons/CloseEye/CloseEye";
import CheckBox from "@/components/CheckBox/CheckBox";
import Link from "next/link";

const Register: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { login } = useAuthStore();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = () => {
    login();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center page">
      <div className="bg-white w-[652px] h-[878px] rounded-lg flex registr flex-col items-center justify-center ml-[214px]">
        <div className="w-[370px] h-[428px] flex flex-col items-center gap-12">
          <h2 className="text-[32px] font-bold mb-4">Регистрация</h2>
          <div className="flex flex-col gap-5">
            <div className="w-[370px] flex flex-col gap-2">
              <input
                type="email"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-[#A1A1AA] rounded-xl text-black"
              />
              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  className="w-full px-4 py-2 border border-[#A1A1AA] rounded-xl"
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
                  placeholder="Повторите пароль"
                  className="w-full px-4 py-2 border border-[#A1A1AA] rounded-xl"
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 cursor-pointer"
                >
                  {showConfirmPassword ? <CloseEye /> : <FullEye />}
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <CheckBox />
              <p className="text-sm ">
                Согласен с{" "}
                <a href="#" className="text-teal-500">
                  условием пользования
                </a>{" "}
                и{" "}
                <a href="#" className="text-teal-500">
                  хранения информации
                </a>{" "}
                о клиенте
              </p>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <button
                onClick={handleRegister}
                className="w-full bg-teal-500 text-white p-2 rounded-xl hover:text-[#52525B] btn"
              >
                Регистрация
              </button>
              <Link href={"/auth"}>
                <button className="w-full bg-white text-black p-2 rounded-xl btn">
                  Авторизация
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
