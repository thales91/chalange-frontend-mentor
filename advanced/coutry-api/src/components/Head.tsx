"use client";
import { useTheme } from "next-themes";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

const Head = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" shadow-sm p-4 shadow-dark-gray/50 dark:shadow-dark-blue/50 bg-white dark:bg-dark-blue">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <div className="font-bold text-xl">Where in the world?</div>
        <div>
          <button
            className="flex gap-1"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <IoMoon size={20}></IoMoon>
            ) : (
              <IoSunnyOutline size={20}></IoSunnyOutline>
            )}
            {theme} Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
