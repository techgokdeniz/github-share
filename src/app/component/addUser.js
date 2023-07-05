"use client";
import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleClick = () => {};

  return (
    <div className="px-6 flex flex-col w-full items-center gap-4">
      <h1 className=" md:text-xl text-md text-center font-medium">
        Sisteme Github Hesabını Eklemek İçin Kullanıcı Adını Gönder!
      </h1>
      <div className="w-full">
        <input
          value={setUser}
          name="username"
          onChange={(e) => setUser(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="w-full">
        <button className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 text-white focus:outline-none">
          Ekle
        </button>
      </div>
    </div>
  );
};

export default AddUser;
