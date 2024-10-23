import { PersonAdd } from "../Icons/PersonAdd/PersonAdd";
import { User } from "../Icons/User/User";

export default function InfoTask() {
  return (
    <div className="w-[1535px] h-[93px] px-8 py-5 bg-zinc-50 rounded-[20px]">
      <div className="flex justify-between h-[53px] items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Хакатон</h1>
          <div className="flex gap-2">
            <PersonAdd />
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
        <div className="flex gap-4 w-[1078px] h-[53px]">
          <div className="flex flex-col text-center h-[32px] w-[220px]">
            <p className="text-zinc-500">Кол-во Проектов</p>
            <p className="font-semibold">6</p>
          </div>
          <div className="border"></div>
          <div className="flex flex-col text-center h-[32px] w-[220px]">
            <p className="text-zinc-500">Кол-во задач</p>
            <p className="font-semibold">12</p>
          </div>
          <div className="border"></div>
          <div className="flex flex-col text-center h-[32px] w-[220px]">
            <p className="text-zinc-500">Кол-во выполненных задач</p>
            <p className="font-semibold">4</p>
          </div>
          <div className="border"></div>
          <div className="flex flex-col text-center h-[32px] w-[220px]">
            <p className="text-zinc-500">Ср. время выполнения </p>
            <p className="font-semibold">46:08</p>
          </div>
        </div>
      </div>
    </div>
  );
}
