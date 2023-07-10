import Link from "next/link";
import React from "react";
import Sketlon from "./sketlon";

const Footer = () => {
  return (
    <div className="w-full px-6">
      <div className="flex flex-col items-center py-6">
        <p className="text-sm text-gray-700 dark:text-gray-200 font-bold mb-2">
          © 2023 by{" "}
          <Link href={"https://www.gokdeniz.dev/"}>gokdenizcetin</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
