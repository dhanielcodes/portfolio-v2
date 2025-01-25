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
        <b>Daniel Adekoya</b>
        <br></br> A results-driven Frontend Engineer with 4+ years of experience
        specializing in crafting secure, intuitive, and responsive applications.
        I excel in UI design, web, and mobile development, delivering seamless
        user experiences across various sectors, including finance, legal
        platforms, and industries requiring high data security and compliance
        standards. My work is driven by a commitment to quality, innovation, and
        creating solutions that leave a lasting impact.
      </div>
    </div>
  );
};
