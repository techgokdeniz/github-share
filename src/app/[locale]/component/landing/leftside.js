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
        GitHub Hesabınızı Paylaşın ve Daha Fazla Kişiye Ulaşın
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        GitHub Adder, GitHub kullanıcılarının birbirlerini takip ederek takipçi
        sayılarını artırmalarını sağlayan yenilikçi bir web uygulamasıdır.
        GitHub, açık kaynaklı yazılım platformu olarak dünya çapında milyonlarca
        geliştirici tarafından kullanılmaktadır ve aktif bir topluluğa sahiptir.
        Bu toplulukta, geliştiriciler projelerini tanıtmak, geri bildirim almak
        veya işbirliği yapmak amacıyla birbirlerini takip etmektedir.
      </p>
      <Link
        href="#test"
        className=" w-full text-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Github Hesabını Sisteme Ekle
      </Link>
    </div>
  );
};

export default LeftSide;
