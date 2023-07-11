"use client";
import React, { useState } from "react";
import { isEmpty } from "lodash";
import { toast } from "react-hot-toast";
import { addUser } from "../service/userService";
import { useTranslations } from "next-intl";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const t = useTranslations("leftSide");

  const handleClick = async () => {
    if (isEmpty(user)) return toast.error("Kullanıcı Adı Boş Olamaz!");

    setLoading(true);
    const data = await addUser(user).finally(() => setLoading(false));

    if (!data.success) {
      return toast.error(data.message);
    } else {
      return toast.success(data.message);
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <h1 className=" md:text-xl text-md text-center font-medium text-gray-700 dark:text-gray-300">
        {t("add")}
      </h1>
      <div className="w-full">
        <input
          placeholder={t("placheholder") + " : techgokdeniz"}
          name="username"
          onChange={(e) => setUser(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 dark:border-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full text-center transition-all duration-200  text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900 ${
          loading && "opacity-50 cursor-not-allowed"
        }}`}
      >
        {t("homebutton")}
      </button>
    </div>
  );
};

export default AddUser;
