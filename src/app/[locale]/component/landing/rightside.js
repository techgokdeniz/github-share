"use client";
import Image from "next/image";
import useSWR from "swr";
import Sketlon from "../rightSketlon";

const RightSide = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("tr/api/getlastuser", fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>Ooops... {error.message}</div>;

  return (
    <div className="flex flex-col md:p-0 md:items-end md:justify-end">
      {isLoading ? (
        <Sketlon />
      ) : (
        <div className="px-6  max-w-[400px] md:px-12 md:py-6 shadow-md rounded-2xl items-center py-4 dark:bg-gray-900 bg-gray-100 flex justify-between flex-col gap-4">
          <h1 className="text-lg font-semibold w-[250px] text-center dark:text-gray-300">
            Sisteme Son Eklenen Kullanıcı
          </h1>
          <Image
            className="rounded-full border-2"
            src={data.data.avatarUrl}
            alt="rightsideavatar"
            height={200}
            width={200}
          />
          <h1 className="text-lg font-semibold dark:text-gray-300 ">
            {isLoading ? "loading..." : data.data.name}
          </h1>
          <p className="text-center">
            {isLoading ? "loading..." : data.data.bio}
          </p>
        </div>
      )}
    </div>
  );
};

export default RightSide;
