import Link from "next/link";
import StockPhoto from "../../images/stockheader.png";
import Image from "next/image";

import { useTranslations } from "next-intl";

const LeftSide = () => {
  const t = useTranslations("leftSide");
  return (
    <div className="flex gap-4 flex-col items-start">
      <div className="relative hidden md:w-[300px] md:h-[300px] md:block">
        <Image src={StockPhoto} alt="Stock Photo" className="rounded-full" />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mt-10 md:mt-0 text-gray-700 dark:text-gray-300">
        {t("title")}
      </h1>
      <h2 className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 max-w-lg">
        {t("subtitle")}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{t("desc")}</p>
      <Link
        href="#test"
        className="w-full text-center transition-all duration-200  text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900 ${
          "
      >
        {t("homebutton")}
      </Link>
    </div>
  );
};

export default LeftSide;
