import React from "react";
import Circle from "<absolute>/images/CIRCLE.svg";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div
      className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   col-span-3 relative w-full p-[30px] flex flex-col items-start justify-between h-full  rounded-2xl text-white`}
    >
      <Image src={Circle} className="animate-spin-slower" alt={""} />
      <div className="text-[18px] font-[Gilroy-Light]">
        Daniel Adekoya is a results-driven Front-End Engineer with four years of
        experience, specializing in building secure, intuitive, and responsive
        fintech applications. I focus on UI design, web, and mobile development,
        creating seamless user experiences for financial platforms that require
        high data security and compliance standards.
      </div>
    </div>
  );
};
