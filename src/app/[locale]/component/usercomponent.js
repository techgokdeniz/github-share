import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const UserComponent = ({
  avatarUrl,
  name,
  bio,
  followers = 0,
  following = 0,
  favoriteLanguage = "No Language",
}) => {
  const t = useTranslations("users");
  return (
    <div className="flex hover:scale-x-95 transition-all duration-200 justify-between gap-x-6 py-4 px-2 border rounded-md border-gray-400 dark:border-gray-700">
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
            {name || t("noname")}
          </p>
          <p className="mt-1 truncate text-xs leading-5 dark:text-white text-gray-500">
            {bio.slice(0, 50) + "..." || t("nobio")}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end ">
        <div className="flex gap-2">
          <p className="text-sm leading-6 dark:text-white text-gray-900 font-thin">
            <strong className="font-bold">{followers}</strong> {t("follow")}
          </p>
          <p className="text-sm leading-6 dark:text-white text-gray-900 font-thin">
            <strong className="font-bold">{following}</strong> {t("following")}
          </p>
        </div>

        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 dark:text-white text-gray-500">
            {t("fav")} {favoriteLanguage || t("nofav")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
