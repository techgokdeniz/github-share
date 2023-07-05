"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className="w-[42px] h-[24px] border-[2px] border-gray-300 rounded-[30px] flex justify-between p-[3px] cursor-pointer relative"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="text-xs text-yellow-400">🌙</div>
        <div className="text-xs text-red-200">🔆</div>
        <div
          className={`w-[15px] h-[15px] ${
            theme === "light" ? "bg-black " : "bg-white"
          } rounded-full absolute transition-all duration-300`}
          style={theme === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
