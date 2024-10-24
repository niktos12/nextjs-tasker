import { Search } from "../Icons/Search/Search";
import Link from "next/link";

export function AdminHeader() {
  return (
    <div className="flex flex-row justify-between px-5 py-6 bg-[#F4F4F5] rounded-[30px] w-full items-center my-8">
      <div className="flex flex-row items-center gap-3">
        <img src="/picture2.png" className="rounded-full" />
        <Link href={"/admin-lk"}>
          <div className="flex flex-col">
            <p className="text-teal-500">Супер администратор</p>
            <p className="font-semibold">Никита Шилов</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <Link
          href={"/admin-kanban"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
          Задачи
        </Link>
        <Link
          href={"/managment-users"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
          Пользователи
        </Link>
        <Link
          href={"/admin-project"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
          Проекты
        </Link>
        <Link
          href={"/admin-table"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
          Сводная таблица
        </Link>
      </div>
      <Link href={"/register"}>
        <button className="bg-teal-500 w-[103px] text-white font-semibold h-9 px-5 py-1  rounded-xl hover:bg-teal-600 flex justify-center items-center">
          Выйти
        </button>
      </Link>
    </div>
  );
}
