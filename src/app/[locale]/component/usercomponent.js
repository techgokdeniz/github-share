import Image from "next/image";
import React from "react";

const UserComponent = ({
  avatarUrl,
  name,
  bio,
  followers = 0,
  following = 0,
  favoriteLanguage = "No Language",
}) => {
  return (
    <div className="flex hover:scale-x-95 transition-all duration-200 justify-between gap-x-6 py-4 px-2 border rounded-md border-gray-200 dark:border-gray-700">
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
            {name || "İsim Bulunamadı"}
          </p>
          <p className="mt-1 truncate text-xs leading-5 dark:text-white text-gray-500">
            {bio || "Bio Bulunamadı"}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end ">
        <div className="flex gap-2">
          <p className="text-sm leading-6 dark:text-white text-gray-900 font-thin">
            <strong className="font-bold">{followers}</strong> Takipçi
          </p>
          <p className="text-sm leading-6 dark:text-white text-gray-900 font-thin">
            <strong className="font-bold">{following}</strong> Takip Edilen
          </p>
        </div>

        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 dark:text-white text-gray-500">
            Favori Yazılım Dili : {favoriteLanguage || "Dil Yok"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
