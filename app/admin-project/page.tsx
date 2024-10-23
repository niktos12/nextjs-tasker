"use client";

import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import GreenRestangle from "@/components/Icons/GreenRestangle/GreenRestangle";
import OrangeRestagnle from "@/components/Icons/OrangeRestangle/OrangeRestangle";
import { Plus } from "@/components/Icons/Plus/Plus";
import RedRestangle from "@/components/Icons/RedRestangle/RedRestangle";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function adminProject() {
  return (
    <div className="container">
      <AdminHeader />
      <div className="flex flex-col gap-8 p-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-8 ">
            <h1 className="text-2xl font-semibold">Все проекты</h1>
            <div className="flex gap-3 font-semibold items-center">
              <div className="flex gap-3">
                <div className="p-2 border-[1px] rounded-md">
                  <RedRestangle />
                </div>
                <p className="flex items-center">Высокая</p>
              </div>
              <div className="flex gap-3">
                <div className="p-2 border-[1px] rounded-md">
                  <OrangeRestagnle />
                </div>
                <p className="flex items-center">Средняя</p>
              </div>
              <div className="flex gap-3">
                <div className="p-2 border-[1px] rounded-md">
                  <GreenRestangle />
                </div>
                <p className="flex items-center">Низкая</p>
              </div>
            </div>
          </div>            
            <button className="flex p-3 gap-1 bg-black text-white rounded-[10px]"><Plus/> Добавить проект</button>
        </div>
        <div className="bg-zinc-50 rounded-[20px] p-8 w-[1471px] h-fit grid-cols-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <ProjectCard
                title="хакатон"
                people={4}
                complexity="Высокая"
                sprints={8}
              />
              <ProjectCard
                title="кулинарный мастер класс"
                people={1}
                complexity="Средняя"
                sprints={1}
              />
              <ProjectCard
                title="конкурс"
                people={1}
                complexity="Высокая"
                sprints={3}
              />
              <ProjectCard
                title="списать лекции"
                people={1}
                complexity="Низкая"
                sprints={2}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ProjectCard
                title="подготовка к турниру"
                people={2}
                complexity="Высокая"
                sprints={9}
              />
              <ProjectCard
                title="придумать дизайн интерьера"
                people={4}
                complexity="Высокая"
                sprints={2}
              />
              <ProjectCard
                title="анализ конкурентов "
                people={3}
                complexity="Низкая"
                sprints={1}
              />
              <ProjectCard
                title="социальный эксперимент "
                people={3}
                complexity="Низкая"
                sprints={2}
              />
            </div>
            <div className="flex flex-col gap-4">
              <ProjectCard
                title="поиск площадки"
                people={4}
                complexity="Средняя"
                sprints={6}
              />
              <ProjectCard
                title="репетиция"
                people={8}
                complexity="Высокая"
                sprints={1}
              />
              <ProjectCard
                title="поход в магазин"
                people={1}
                complexity="Низкая"
                sprints={1}
              />
              <ProjectCard
                title="защита презентации"
                people={2}
                complexity="Низкая"
                sprints={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
