import React from "react";
import Image from "next/image";

const Sketlon = () => {
  return (
    <div className="flex w-full hover:scale-x-95 transition-all duration-200 justify-between gap-x-6 py-4 px-2 border rounded-md border-gray-200 dark:border-gray-700">
      <div className="flex gap-x-4 items-center">
        <div className="h-12 w-12 rounded-full bg-gray-200"></div>
        <div className="flex flex-col gap-2 ">
          <div className="h-4 w-24 rounded-xl bg-gray-200"></div>
          <div className="h-4 w-20 rounded-xl bg-gray-200"></div>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end ">
        <div className="flex gap-2">
          <div className="h-4 w-16 rounded-xl bg-gray-200"></div>
          <div className="h-4 w-16 rounded-xl bg-gray-200"></div>
        </div>

        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <div className="h-4 w-40 rounded-xl bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Sketlon;
