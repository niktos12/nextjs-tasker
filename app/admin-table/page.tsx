"use client";

import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import { Search } from "@/components/Icons/Search/Search";
import InfoTask from "@/components/InfoTask/InfoTask";

export default function adminTable() {
  return (
    <div className="container">
      <AdminHeader />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] font-semibold">Отчеты и аналитика</h1>
          <input
            type="text"
            placeholder="Поиск"
            className="px-4 h-12 border-[1px] border-zinc-200 w-[313px] rounded-lg relative"
          />
          <span className="absolute left-[460px] top-[220px]">
            <Search />
          </span>
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
}
