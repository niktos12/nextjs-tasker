import { User } from "../Icons/User/User";

export function Statistic() {
  return (
    <div className="p-8 bg-zinc-50 w-[823px] h-fit rounded-[20px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Хакатон</h3>
          <div className="flex gap-2">
            <div className="rounded-lg px-2 py-1 flex gap-1 bg-teal-50 w-fit">
              <User />
              <p className="text-xs font-medium">Олег Олегов</p>
            </div>
            <div className="rounded-lg px-2 py-1 flex gap-1 bg-zinc-100 w-fit">
              <User />
              <p className="text-xs font-medium">Никита Шилов</p>
            </div>
            <div className="rounded-lg px-2 py-1 flex gap-1 bg-zinc-100 w-fit">
              <User />
              <p className="text-xs font-medium">Ева Гриднева</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col text-center h-[32px]">
            <p className="text-zinc-500">Кол-во участников</p>
            <p className="font-semibold">3</p>
          </div>
          <div className="border"></div>
          <div className="flex flex-col text-center h-[32px]">
            <p className="text-zinc-500">Кол-во задач</p>
            <p className="font-semibold">12</p>
          </div>
          <div className="border"></div>
          <div className="flex flex-col text-center h-[32px]">
            <p className="text-zinc-500">Кол-во выполненных задач</p>
            <p className="font-semibold">4</p>
          </div>
          <div className="border"></div>
          <div className="flex flex-col text-center h-[32px]">
            <p className="text-zinc-500">Ср. время выполнения </p>
            <p className="font-semibold">46:08</p>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
}
