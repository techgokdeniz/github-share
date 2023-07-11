"use client";
import Image from "next/image";
import useSWR from "swr";
import Sketlon from "../rightSketlon";
import { useTranslations } from "next-intl";
import Link from "next/link";
const RightSide = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("en/api/getlastuser", fetcher, {
    revalidateOnFocus: false,
  });

  const t = useTranslations("leftSide");

  if (error) return <div>Ooops... {error.message}</div>;

  return (
    <div className="flex flex-col md:p-0 md:items-end md:justify-end">
      {isLoading ? (
        <Sketlon />
      ) : (
        <Link target="_blank" href={`https://github.com/${data.data.username}`}>
          <div className="px-6 md:min-h-[400px]  md:min-w-[400px] md:px-12 md:py-6 shadow-md rounded-2xl items-center py-4 dark:bg-gray-900 bg-gray-100 flex justify-between flex-col gap-4">
            <h1 className="text-lg text-gray-700 font-semibold w-[250px] text-center dark:text-gray-300">
              {t("last")}
            </h1>
            <Image
              className="rounded-full border-2"
              src={data.data.avatarUrl}
              alt="rightsideavatar"
              height={200}
              width={200}
            />
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300 ">
              {isLoading ? "loading..." : data.data.name}
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300">
              {isLoading ? "loading..." : data.data.bio}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RightSide;
