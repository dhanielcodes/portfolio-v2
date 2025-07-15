import React from "react";
import Image from "next/image";

export const AboutSection = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const startedYear = 2021;

  const experienceYears = currentYear - startedYear;

  return (
    <div className="space-y-10">
      <Image
        src={"/images/CIRCLE.svg"}
        width={50}
        height={50}
        className="animate-spin-slower"
        alt={""}
      />
      <div className="text-[18px] space-y-4 font-[Gilroy-Light]">
        <b>Daniel Adekoya</b>
        <div>
          A Frontend Engineer with {experienceYears}+ years of experience
          specializing in secure, responsive applications. I focus on UI design,
          web, and mobile development, delivering seamless user experiences in
          finance, legal platforms, and high-security industries.
        </div>
      </div>
    </div>
  );
};
