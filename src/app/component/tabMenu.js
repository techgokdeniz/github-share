"use client";
import React, { useState } from "react";

const TabMenu = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex flex-wrap  gap-4 text-xl font-semibold border-b">
        {config.map((entry, index) => (
          <div
            key={index}
            className={`relative font-semibold cursor-pointer p-4  z-10 ${
              activeTab === index
                ? "border-2 border-b-0 transition-all duration-200 text-red-400"
                : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {entry.header}
          </div>
        ))}
      </div>
      <div className="px-4 py-6 min-h-[250px] flex flex-col gap-4">
        {config[activeTab].component}
      </div>
    </>
  );
};

export default TabMenu;
