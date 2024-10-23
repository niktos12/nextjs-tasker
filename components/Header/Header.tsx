import { Search } from "../Icons/Search/Search";

const Header = () => {
  return (
    <div className="py-8">
      <div className="flex flex-row justify-between px-5 py-6 bg-[#F4F4F5] rounded-[30px] w-full items-center">
        <div className="flex flex-row items-center gap-3">
          <img src="/user.png" />
          <p className="font-semibold">Олег Олегов</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <label className="input rounded-2xl w-[313px] flex items-center gap-2 relative">
            <input type="text" className="" placeholder="Поиск" />
            <Search />
          </label>
          <button className="bg-teal-500 text-white font-semibold h-9 p-3  rounded-xl hover:bg-teal-600 flex items-center">
            Задачи
          </button>
        </div>
        <button className="bg-teal-500 text-white font-semibold h-9 px-5 py-1  rounded-xl hover:bg-teal-600 flex items-center">
          Выйти
        </button>
      </div>
    </div>
  );
};
export default Header;
