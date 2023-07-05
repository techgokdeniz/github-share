import Image from "next/image";

const RightSide = () => {
  return (
    <div className="flex flex-col p-6 md:p-0 md:items-end md:justify-end">
      <div className="px-6 md:px-12 md:py-6 rounded-2xl items-center md:items-start py-4 dark:bg-gray-900 bg-gray-100 flex justify-between flex-col gap-4">
        <h1 className="text-2xl font-semibold dark:text-gray-300">Last User</h1>
        <Image
          className="rounded-3xl"
          src="https://avatars.githubusercontent.com/u/74786317?v=4"
          alt="test"
          height={200}
          width={200}
        />
        <h1 className="text-xl font-medium dark:text-gray-300">
          Gökdeniz Çetin
        </h1>
      </div>
    </div>
  );
};

export default RightSide;
