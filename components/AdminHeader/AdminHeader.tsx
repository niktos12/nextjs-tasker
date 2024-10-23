import { Search } from "../Icons/Search/Search";
import Link from "next/link";

export function AdminHeader() {
  return (
    <div className="flex flex-row justify-between px-5 py-6 bg-[#F4F4F5] rounded-[30px] w-full items-center my-8">
      <div className="flex flex-row items-center gap-3">
        <img src="/picture2.png" className="rounded-full" />
        <Link href={"/adminLk"}>
          <div className="flex flex-col">
            <p className="text-teal-500">Супер администратор</p>
            <p className="font-semibold">Никита Шилов</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <Link href={"/admin-project"} className="font-semibold text-[#3F3F46]">
          Задачи
        </Link>
        <Link href={"/ManagmentUsers"} className="font-semibold text-[#3F3F46]">
          Пользователи
        </Link>
        <Link href={"/admin-table"} className="font-semibold text-[#3F3F46]">
          Сводная таблица
        </Link>
      </div>
      <Link href={"/register"}>
        <button className="bg-teal-500 text-white font-semibold h-9 px-5 py-1  rounded-xl hover:bg-teal-600 flex items-center">
          Выйти
        </button>
      </Link>
    </div>
  );
}
