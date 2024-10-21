import React from "react";

const SkeletonTask: React.FC = () => {
  return (
    <li className="p-2 border-b border-gray-200 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-24 h-4 bg-gray-300 rounded-md mr-2 animate-pulse"></div>
        <div className="w-16 h-4 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
      <div className="flex space-x-2">
        <div className="w-16 h-8 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-16 h-8 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </li>
  );
};

export default SkeletonTask;
