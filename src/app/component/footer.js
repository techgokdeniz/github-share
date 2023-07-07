import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-6">
      <div className="flex flex-col items-center py-6">
        <Link href={"https/gokdeniz.dev"}>
          <p className="text-sm text-gray-700 dark:text-gray-200 font-bold mb-2">
            © 2023 by gokdenizcetin
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
