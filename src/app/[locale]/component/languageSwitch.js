"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EnImage from "../images/en.svg";
import TrImage from "../images/tr.svg";

const LanguageSwitcher = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/en">
        <Image
          src={EnImage}
          alt="En Flag"
          className="rounded-full"
          width={30}
          height={30}
        />
      </Link>
      <Link href="/tr">
        <Image
          src={TrImage}
          alt="Turkish Flag"
          className="rounded-full"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
