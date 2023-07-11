import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import { BsGithub } from "react-icons/bs";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./languageSwitch";

const Header = () => {
  const t = useTranslations("leftSide");
  return (
    <div className="w-full border-b-[1px] dark:border-gray-800 py-2 border-blue-gray-100">
      <div className="container mx-auto py-3 px-4 md:px-0 flex justify-between items-center">
        <Link href="/">
          <div className="font-bold flex gap-4 items-center cursor-pointer">
            <BsGithub className="inline-block text-2xl text-gray-700 dark:text-gray-300" />
            <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {t("title")}
            </span>
          </div>
        </Link>
        <div className="font-medium flex gap-4 justify-between items-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
