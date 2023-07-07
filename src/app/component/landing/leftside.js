import Link from "next/link";
import StockPhoto from "../../../images/stockheader.png";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="flex gap-4 flex-col items-start">
      <Image
        src={StockPhoto}
        alt="Stock Photo"
        height={300}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-300">
        GitHub Adder
      </h1>
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 max-w-lg">
        Takipçi Sayını Yükseltmek İçin Yenilikçi Bir Web Uygulaması
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
