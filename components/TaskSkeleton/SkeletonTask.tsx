import React from "react";

const SkeletonTask: React.FC = () => {
  return (
    <div className="border-b border-gray-200 rounded-lg px-8 py-[20px] gap-10 my-2 h-[81px] bg-white flex flex-row items-center animate-pulse">
      <div className="flex flex-row items-center w-full">
        <div className="w-1/6 text-center">
          <div className="w-32 h-6 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-row gap-[50px] items-center w-full justify-around ml-6">
          <div className="w-[144px] h-8 bg-gray-300 rounded-md"></div>
          <div className="w-[144px] h-8 bg-gray-300 rounded-md"></div>
          <div className="w-[144px] h-8 bg-gray-300 rounded-md"></div>
          <div className="w-[144px] h-8 bg-gray-300 rounded-md"></div>
          <div className="w-[144px] h-8 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonTask;
