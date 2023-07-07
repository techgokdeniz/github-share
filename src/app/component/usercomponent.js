import Image from "next/image";
import React from "react";

const UserComponent = ({ avatarUrl, name, bio }) => {
  return (
    <div className="flex justify-between gap-x-6 py-4 px-2 border rounded-md border-gray-200 dark:border-gray-700">
      <div className="flex gap-x-4">
        <Image
          src={avatarUrl}
          width={48}
          height={48}
          alt="avatar"
          className="rounded-full"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 dark:text-white text-gray-900">
            {name || "No Name"}
          </p>
          <p className="mt-1 truncate text-xs leading-5 dark:text-white text-gray-500">
            {bio || "No Bio"}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 dark:text-white text-gray-900">abc</p>

        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 dark:text-white text-gray-500">abc</p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
