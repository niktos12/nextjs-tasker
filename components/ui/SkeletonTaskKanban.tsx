import React from "react";

const SkeletonTaskKanban: React.FC = () => {
  return (
    <div className="bg-base-100 py-6 px-4 rounded-xl shadow animate-pulse">
      <div className="w-2/3 h-4 bg-gray-300 rounded-md mb-1"></div>
      <div className="border w-full mb-4"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-1/2 h-6 bg-gray-300 rounded-md"></div>
          <div className="flex flex-row gap-2 items-center h-[32px]">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="flex flex-row gap-1 items-center bg-[#F4F4F5] px-2 py-1 rounded-lg">
              <div className="w-[123px] h-6 bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-between h-[19px]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-1 items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonTaskKanban;
