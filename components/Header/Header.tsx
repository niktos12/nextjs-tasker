import Link from "next/link";
import { Search } from "../Icons/Search/Search";

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-5 py-6 bg-[#F4F4F5] rounded-[30px] w-full items-center my-8">
      <div className="flex flex-row items-center gap-3">
        <img src="/user.png" />
        <Link href={"/lk"}>
          <p className="font-semibold">Олег Олегов</p>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <Link
          href={"/project"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
          Проекты
        </Link>
        <Link
          href={"/kanban"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
          Задачи
        </Link>
        <Link
          href={"/table"}
          className="font-semibold text-[#3F3F46] hover:bg-white rounded-xl p-2 duration-300"
        >
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
};
export default Header;
