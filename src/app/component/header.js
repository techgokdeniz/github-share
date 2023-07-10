import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full border-b-[1px] dark:border-gray-800 py-2 border-blue-gray-100">
      <div className="container mx-auto py-3 px-4 md:px-0 flex justify-between items-center">
        <Link href="/">
          <div className="font-bold flex gap-4 items-center cursor-pointer">
            <BsGithub className="inline-block text-2xl text-gray-700 dark:text-gray-300" />
            <span className="text-xl text-gray-700 dark:text-gray-300">
              Github Share Profile
            </span>
          </div>
        </Link>
        <div className="font-medium flex gap-4 justify-between items-center">
          <ThemeSwitcher />
          {/* <button className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Admin
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
