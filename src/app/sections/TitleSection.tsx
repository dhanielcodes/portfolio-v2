import React from "react";
import Img from "<absolute>/images/PORTRAIT2.jpg";
import Flower from "<absolute>/images/FLOWER.svg";
import Image from "next/image";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const TitleSection = () => {
  return (
    <div
      className={`grid md:grid-cols-6  grid-cols-1 row-span-5 md:gap-4 md:mb-0 mb-4 rounded-2xl`}
    >
      <div
        className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   relative col-span-4  w-full p-[30px] flex flex-col items-start justify-between h-full rounded-2xl text-white`}
      >
        <Image src={Flower} className="self-end animate-spin-slow" alt={""} />
        <div className="text-[55px] font-[Gilroy-Bold] leading-[60px]">
          <div className="">Frontend</div>
          <div className="italic font-[Gilroy-Light]">Solutions-Focused</div>
          <div className="">Engineer</div>
        </div>
      </div>
      <div
        className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear relative md:mt-0 mt-4 overflow-hidden uppercase col-span-2  w-full flex items-center h-full rounded-2xl text-white`}
      >
        <Image
          src={Img}
          className="transform hover:scale-[1.1] transition-all duration-1250 ease-linear w-full h-[500px] object-cover "
          alt={""}
        />
      </div>
    </div>
  );
};

TitleSection.propTypes = propTypes;
TitleSection.defaultProps = defaultProps;
// #endregion

export default TitleSection;
