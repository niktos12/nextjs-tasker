import Header from "@/components/Header/Header";
import { Search } from "@/components/Icons/Search/Search";
import InfoTask from "@/components/ordinary/InfoTask";

const Table = () => {
  return (
    <div className="container">
      <Header />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] font-semibold">Отчеты и аналитика</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск"
              className="px-4 h-12 border-[1px] border-zinc-200 w-[313px] rounded-lg pr-10"
            />
            <span className="absolute left-[272px] top-1/2 transform -translate-y-1/2">
              <Search />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <InfoTask />
          <InfoTask />
          <InfoTask />
          <InfoTask />
          <InfoTask />
          <InfoTask />
          <InfoTask />
        </div>
      </div>
    </div>
  );
};
export default Table;
