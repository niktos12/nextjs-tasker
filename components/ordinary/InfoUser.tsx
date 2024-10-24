export default function InfoUser() {
    return(
        <div className="flex gap-4 w-[1078px]">
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
    )
}