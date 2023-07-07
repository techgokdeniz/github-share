"use client";
import Image from "next/image";
import useSWR from "swr";

const RightSide = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/getmostfollow", fetcher);

  if (error) return <div>Ooops... {error.message}</div>;
  return (
    <div className="flex flex-col md:p-0 md:items-end md:justify-end">
      <div className="px-6 md:px-12 md:py-6 shadow-md rounded-2xl items-center py-4 dark:bg-gray-900 bg-gray-100 flex justify-between flex-col gap-4">
        <h1 className="text-lg font-semibold w-[250px] text-center dark:text-gray-300">
          Sisteme Son Eklenen Kullanıcı
        </h1>
        <Image
          className="rounded-full border-2"
          src={
            isLoading
              ? "https://avatars.githubusercontent.com/u/74786317?v=4"
              : data.data[0].avatarUrl
          }
          placeholder="blur"
          blurDataURL="https://avatars.githubusercontent.com/u/74786317?v=4"
          priority
          alt="test"
          height={200}
          width={200}
        />
        <h1 className="text-lg font-semibold dark:text-gray-300">
          {isLoading ? "loading..." : data.data[0].name}
        </h1>
        <p>{isLoading ? "loading..." : data.data[0].bio}</p>
      </div>
    </div>
  );
};

export default RightSide;
