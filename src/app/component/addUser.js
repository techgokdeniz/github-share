"use client";
import React, { useState } from "react";
import { isEmpty } from "lodash";
import { toast } from "react-hot-toast";
import { addUser } from "../service/userService";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="px-6 flex flex-col w-full items-center gap-4">
      <h1 className=" md:text-xl text-md text-center font-medium">
        Sisteme Github Hesabını Eklemek İçin Kullanıcı Adını Gönder!
      </h1>
      <div className="w-full">
        <input
          name="username"
          onChange={(e) => setUser(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full text-center transition-all duration-200  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
          loading && "opacity-50 cursor-not-allowed"
        }}`}
      >
        Ekle
      </button>
    </div>
  );
};

export default AddUser;
