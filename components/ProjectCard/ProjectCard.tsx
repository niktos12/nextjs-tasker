import { FC } from "react";
import { Comment } from "../Icons/Comment/Comment";
import { SmallEye } from "../Icons/SmallEye/SmallEye";
import OrangeRestagnle from "../Icons/OrangeRestangle/OrangeRestangle";

interface Card {
  complexity: string;
  title: string;
  sprints: number;
  people: number;
}

const ProjectCard: FC <Card> = ({complexity, title, sprints, people}) => {
  const getComplexityIndicator = (complexity: string) => {
    switch (complexity) {
      case "Высокая":
        return (
          <div className="bg-[#F87171] w-[14px] h-[14px] rounded-full"></div>
        );
      case "Средняя":
        return (
          <OrangeRestagnle/>
        );
      case "Низкая":
        return (
          <div className="bg-[#34D399] w-[14px] h-[14px] rounded-full"></div>
        );
      default:
        return null;
    }
  };
  return (
  <div className="bg-white px-4 py-6 w-[453px] rounded-xl">
    <div className="flex flex-col gap-8 text-zinc-400">
        <div>
            <p className="text-xs px-2 py-1 bg-zinc-100 rounded w-fit">В работе</p>
            <p className="text-xl font-semibold text-black">{title}</p>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 text-xs items-center">
                <p>Кол-во спринтов: <span className="rounded px-2 py-1 bg-zinc-100">{sprints}</span></p>
                <p>Кол-во людей: <span className="rounded px-2 py-1 bg-zinc-100">{people}</span></p>
                <p >Кол-во задач: <span className="rounded px-2 py-1 bg-zinc-100">1</span></p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="flex items-center text-xs gap-1">
                        <Comment/>
                        <p className="p-1 bg-zinc-100 rounded-md">3</p>
                    </div>
                    <div className="flex items-center text-xs gap-1">
                        <SmallEye/>
                        <p className="p-1 bg-zinc-100 rounded-md">4</p>
                    </div>
                </div>
                <div>{getComplexityIndicator(complexity)}</div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ProjectCard;
