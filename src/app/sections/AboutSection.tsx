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
          Frontend engineer with {experienceYears}+ years of working experience in React, Vue, JavaScript, and TypeScript. Has built products across fintech, e-commerce, data visualization, and law tech. Works well with other teams and enjoy helping subordinates
        </div>
      </div>
    </div>
  );
};

