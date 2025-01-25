import React from "react";
import Circle from "<absolute>/images/CIRCLE.svg";
import Image from "next/image";

export const AboutSection = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const startedYear = 2021;

  const experienceYears = currentYear - startedYear;

  return (
    <div
      className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   col-span-3 relative w-full p-[30px] flex flex-col items-start justify-between h-full  rounded-2xl text-white`}
    >
      <Image src={Circle} className="animate-spin-slower" alt={""} />
      <div className="text-[18px] font-[Gilroy-Light]">
        <b>Daniel Adekoya</b>
        <br></br>A Frontend Engineer with {experienceYears}+ years of experience
        specializing in secure, responsive applications. I focus on UI design,
        web, and mobile development, delivering seamless user experiences in
        finance, legal platforms, and high-security industries.
      </div>
    </div>
  );
};
